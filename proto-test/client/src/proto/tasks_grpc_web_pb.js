/**
 * @fileoverview gRPC-Web generated client stub for template
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
proto.template = require('./tasks_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?grpc.web.ClientOptions} options
 * @constructor
 * @struct
 * @final
 */
proto.template.TaskServiceClient =
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
proto.template.TaskServicePromiseClient =
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
 *   !proto.template.CreateTaskRequest,
 *   !proto.template.Task>}
 */
const methodDescriptor_TaskService_CreateTask = new grpc.web.MethodDescriptor(
  '/template.TaskService/CreateTask',
  grpc.web.MethodType.UNARY,
  proto.template.CreateTaskRequest,
  proto.template.Task,
  /**
   * @param {!proto.template.CreateTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.Task.deserializeBinary
);


/**
 * @param {!proto.template.CreateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.TaskServiceClient.prototype.createTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.TaskService/CreateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_CreateTask,
      callback);
};


/**
 * @param {!proto.template.CreateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.Task>}
 *     Promise that resolves to the response
 */
proto.template.TaskServicePromiseClient.prototype.createTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.TaskService/CreateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_CreateTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.template.TaskRequest,
 *   !proto.template.Task>}
 */
const methodDescriptor_TaskService_GetTask = new grpc.web.MethodDescriptor(
  '/template.TaskService/GetTask',
  grpc.web.MethodType.UNARY,
  proto.template.TaskRequest,
  proto.template.Task,
  /**
   * @param {!proto.template.TaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.Task.deserializeBinary
);


/**
 * @param {!proto.template.TaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.TaskServiceClient.prototype.getTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.TaskService/GetTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_GetTask,
      callback);
};


/**
 * @param {!proto.template.TaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.Task>}
 *     Promise that resolves to the response
 */
proto.template.TaskServicePromiseClient.prototype.getTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.TaskService/GetTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_GetTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.template.ListTasksRequest,
 *   !proto.template.TasksResponse>}
 */
const methodDescriptor_TaskService_ListTasks = new grpc.web.MethodDescriptor(
  '/template.TaskService/ListTasks',
  grpc.web.MethodType.UNARY,
  proto.template.ListTasksRequest,
  proto.template.TasksResponse,
  /**
   * @param {!proto.template.ListTasksRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.TasksResponse.deserializeBinary
);


/**
 * @param {!proto.template.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.TasksResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.TasksResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.TaskServiceClient.prototype.listTasks =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.TaskService/ListTasks',
      request,
      metadata || {},
      methodDescriptor_TaskService_ListTasks,
      callback);
};


/**
 * @param {!proto.template.ListTasksRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.TasksResponse>}
 *     Promise that resolves to the response
 */
proto.template.TaskServicePromiseClient.prototype.listTasks =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.TaskService/ListTasks',
      request,
      metadata || {},
      methodDescriptor_TaskService_ListTasks);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.template.UpdateTaskRequest,
 *   !proto.template.Task>}
 */
const methodDescriptor_TaskService_UpdateTask = new grpc.web.MethodDescriptor(
  '/template.TaskService/UpdateTask',
  grpc.web.MethodType.UNARY,
  proto.template.UpdateTaskRequest,
  proto.template.Task,
  /**
   * @param {!proto.template.UpdateTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.template.Task.deserializeBinary
);


/**
 * @param {!proto.template.UpdateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.template.Task)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.template.Task>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.TaskServiceClient.prototype.updateTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.TaskService/UpdateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_UpdateTask,
      callback);
};


/**
 * @param {!proto.template.UpdateTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.template.Task>}
 *     Promise that resolves to the response
 */
proto.template.TaskServicePromiseClient.prototype.updateTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.TaskService/UpdateTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_UpdateTask);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.template.DeleteTaskRequest,
 *   !proto.google.protobuf.Empty>}
 */
const methodDescriptor_TaskService_DeleteTask = new grpc.web.MethodDescriptor(
  '/template.TaskService/DeleteTask',
  grpc.web.MethodType.UNARY,
  proto.template.DeleteTaskRequest,
  google_protobuf_empty_pb.Empty,
  /**
   * @param {!proto.template.DeleteTaskRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  google_protobuf_empty_pb.Empty.deserializeBinary
);


/**
 * @param {!proto.template.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.RpcError, ?proto.google.protobuf.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.google.protobuf.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.template.TaskServiceClient.prototype.deleteTask =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/template.TaskService/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_DeleteTask,
      callback);
};


/**
 * @param {!proto.template.DeleteTaskRequest} request The
 *     request proto
 * @param {?Object<string, string>=} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.google.protobuf.Empty>}
 *     Promise that resolves to the response
 */
proto.template.TaskServicePromiseClient.prototype.deleteTask =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/template.TaskService/DeleteTask',
      request,
      metadata || {},
      methodDescriptor_TaskService_DeleteTask);
};


module.exports = proto.template;

