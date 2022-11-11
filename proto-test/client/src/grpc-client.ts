// import { TaskServiceClient } from './proto/tasks_grpc_web_pb';

import { grpc } from '@improbable-eng/grpc-web';
import * as grpcWeb from 'grpc-web';

import {
  AuthServiceClient,
  AuthServicePromiseClient,
} from './proto/auth_grpc_web_pb';

// import { ChannelCredentials } from '@grpc/grpc-js';
// import { grpc } from '@improbable-eng/grpc-web';

export default new AuthServiceClient('http://localhost:8000', null, null);

const testAccesssToken = 'test';

const UnaryInterceptor = function () {} as any;
UnaryInterceptor.prototype.intercept = function (
  request: grpcWeb.Request<any, any>,
  invoker: any
) {
  // Update the request message before the RPC.
  const reqMsg = request.getRequestMessage();
  reqMsg.setMessage('[Intercept request]' + reqMsg.getMessage());

  // After the RPC returns successfully, update the response.
  return invoker(request).then((response: any) => {
    // You can also do something with response metadata here.
    console.log(response.getMetadata());
    console.log('HI');

    // Update the response message.
    const responseMsg = response.getResponseMessage();
    responseMsg.setMessage('[Intercept response]' + responseMsg.getMessage());

    return response;
  });
};

/** Sample interceptor implementation */

let stream: grpcWeb.ClientReadableStream<any>;

/**
 * @template REQUEST, RESPONSE
 * @param {!Request<REQUEST, RESPONSE>} request
 * @param {function(!Request<REQUEST,RESPONSE>):!ClientReadableStream<RESPONSE>}
 *     invoker
 * @return {!ClientReadableStream<RESPONSE>}
 */
const StreamResponseInterceptor = function () {} as any;
StreamResponseInterceptor.prototype.intercept = function (
  request: grpcWeb.Request<any, any>,
  invoker: any
) {
  const InterceptedStream = function (stream1: any) {
    stream = stream1;
  } as any;
  InterceptedStream.prototype.on = function (eventType: any, callback: any) {
    if (eventType == 'data') {
      console.log('intercepted data');
      const newCallback = (response: any) => {
        response.setMessage('[Intcpt Resp1]' + response.getMessage());
        callback(response);
      };
      stream.on(eventType, newCallback);
    } else {
      stream.on(eventType, callback);
    }
    return this;
  };
  //   console.log('Type of request: ', typeof request);
  var reqMsg = request.getRequestMessage();

  console.log('reqMsg 1', reqMsg);
  //   reqMsg.setMessage('[Intcpt Req1]' + reqMsg);
  return new InterceptedStream(invoker(request));
} as any;

var opts = {
  streamInterceptors: [new StreamResponseInterceptor()],
  unaryInterceptors: [new UnaryInterceptor()],
};

export const clientWithInterceptor = new AuthServiceClient(
  'http://localhost:8000',
  null,
  opts
);

// export const clientWithInterceptor = new AuthServicePromiseClient(
//   'http://localhost:8000', null,
//   {'streamInterceptors': [new TestStreamInterceptor()]});
