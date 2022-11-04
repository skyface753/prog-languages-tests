/**
 * @fileoverview gRPC-Web generated client stub for tasks
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js')

var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js')
const proto = {};
proto.tasks = require('./tasks_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tasks.TaskServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.tasks.TaskServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options.format = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasks.Task,
 *   !proto.tasks.TaskResponse>}
 */
const methodDescriptor_TaskService_Create = new grpc.web.MethodDescriptor(
  '/tasks.TaskService/Create',
  grpc.web.MethodType.UNARY,
  proto.tasks.Task,
  proto.tasks.TaskResponse,
  /**
   * @param {!proto.tasks.Task} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasks.TaskResponse.deserializeBinary
);


/**
 * @param {!proto.tasks.Task} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasks.TaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasks.TaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasks.TaskServiceClient.prototype.create =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasks.TaskService/Create',
      request,
      metadata || {},
      methodDescriptor_TaskService_Create,
      callback);
};


/**
 * @param {!proto.tasks.Task} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasks.TaskResponse>}
 *     Promise that resolves to the response
 */
proto.tasks.TaskServicePromiseClient.prototype.create =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasks.TaskService/Create',
      request,
      metadata || {},
      methodDescriptor_TaskService_Create);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasks.TaskRequest,
 *   !proto.tasks.TaskResponse>}
 */
const methodDescriptor_TaskService_Read = new grpc.web.MethodDescriptor(
  '/tasks.TaskService/Read',
  grpc.web.MethodType.UNARY,
  proto.tasks.TaskRequest,
  proto.tasks.TaskResponse,
  /**
   * @param {!proto.tasks.TaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasks.TaskResponse.deserializeBinary
);


/**
 * @param {!proto.tasks.TaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasks.TaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasks.TaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasks.TaskServiceClient.prototype.read =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasks.TaskService/Read',
      request,
      metadata || {},
      methodDescriptor_TaskService_Read,
      callback);
};


/**
 * @param {!proto.tasks.TaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasks.TaskResponse>}
 *     Promise that resolves to the response
 */
proto.tasks.TaskServicePromiseClient.prototype.read =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasks.TaskService/Read',
      request,
      metadata || {},
      methodDescriptor_TaskService_Read);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasks.Task,
 *   !proto.tasks.TaskResponse>}
 */
const methodDescriptor_TaskService_Update = new grpc.web.MethodDescriptor(
  '/tasks.TaskService/Update',
  grpc.web.MethodType.UNARY,
  proto.tasks.Task,
  proto.tasks.TaskResponse,
  /**
   * @param {!proto.tasks.Task} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasks.TaskResponse.deserializeBinary
);


/**
 * @param {!proto.tasks.Task} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasks.TaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasks.TaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasks.TaskServiceClient.prototype.update =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasks.TaskService/Update',
      request,
      metadata || {},
      methodDescriptor_TaskService_Update,
      callback);
};


/**
 * @param {!proto.tasks.Task} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasks.TaskResponse>}
 *     Promise that resolves to the response
 */
proto.tasks.TaskServicePromiseClient.prototype.update =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasks.TaskService/Update',
      request,
      metadata || {},
      methodDescriptor_TaskService_Update);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.tasks.DeleteTaskRequest,
 *   !proto.tasks.DeleteTaskResponse>}
 */
const methodDescriptor_TaskService_Delete = new grpc.web.MethodDescriptor(
  '/tasks.TaskService/Delete',
  grpc.web.MethodType.UNARY,
  proto.tasks.DeleteTaskRequest,
  proto.tasks.DeleteTaskResponse,
  /**
   * @param {!proto.tasks.DeleteTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasks.DeleteTaskResponse.deserializeBinary
);


/**
 * @param {!proto.tasks.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasks.DeleteTaskResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasks.DeleteTaskResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasks.TaskServiceClient.prototype.delete =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasks.TaskService/Delete',
      request,
      metadata || {},
      methodDescriptor_TaskService_Delete,
      callback);
};


/**
 * @param {!proto.tasks.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasks.DeleteTaskResponse>}
 *     Promise that resolves to the response
 */
proto.tasks.TaskServicePromiseClient.prototype.delete =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasks.TaskService/Delete',
      request,
      metadata || {},
      methodDescriptor_TaskService_Delete);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.google.protobuf.Empty,
 *   !proto.tasks.TasksResponse>}
 */
const methodDescriptor_TaskService_List = new grpc.web.MethodDescriptor(
  '/tasks.TaskService/List',
  grpc.web.MethodType.UNARY,
  google_protobuf_empty_pb.Empty,
  proto.tasks.TasksResponse,
  /**
   * @param {!proto.google.protobuf.Empty} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.tasks.TasksResponse.deserializeBinary
);


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.tasks.TasksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.tasks.TasksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.tasks.TaskServiceClient.prototype.list =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/tasks.TaskService/List',
      request,
      metadata || {},
      methodDescriptor_TaskService_List,
      callback);
};


/**
 * @param {!proto.google.protobuf.Empty} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.tasks.TasksResponse>}
 *     Promise that resolves to the response
 */
proto.tasks.TaskServicePromiseClient.prototype.list =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/tasks.TaskService/List',
      request,
      metadata || {},
      methodDescriptor_TaskService_List);
};


module.exports = proto.tasks;

