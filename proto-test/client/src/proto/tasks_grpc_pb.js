// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var tasks_pb = require('./tasks_pb.js');
var google_protobuf_timestamp_pb = require('google-protobuf/google/protobuf/timestamp_pb.js');
var google_protobuf_empty_pb = require('google-protobuf/google/protobuf/empty_pb.js');

function serialize_google_protobuf_Empty(arg) {
  if (!(arg instanceof google_protobuf_empty_pb.Empty)) {
    throw new Error('Expected argument of type google.protobuf.Empty');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_google_protobuf_Empty(buffer_arg) {
  return google_protobuf_empty_pb.Empty.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_DeleteTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.DeleteTaskRequest)) {
    throw new Error('Expected argument of type tasks.DeleteTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_DeleteTaskRequest(buffer_arg) {
  return tasks_pb.DeleteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_DeleteTaskResponse(arg) {
  if (!(arg instanceof tasks_pb.DeleteTaskResponse)) {
    throw new Error('Expected argument of type tasks.DeleteTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_DeleteTaskResponse(buffer_arg) {
  return tasks_pb.DeleteTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_Task(arg) {
  if (!(arg instanceof tasks_pb.Task)) {
    throw new Error('Expected argument of type tasks.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_Task(buffer_arg) {
  return tasks_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TaskRequest(arg) {
  if (!(arg instanceof tasks_pb.TaskRequest)) {
    throw new Error('Expected argument of type tasks.TaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_TaskRequest(buffer_arg) {
  return tasks_pb.TaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TaskResponse(arg) {
  if (!(arg instanceof tasks_pb.TaskResponse)) {
    throw new Error('Expected argument of type tasks.TaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_TaskResponse(buffer_arg) {
  return tasks_pb.TaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_tasks_TasksResponse(arg) {
  if (!(arg instanceof tasks_pb.TasksResponse)) {
    throw new Error('Expected argument of type tasks.TasksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_tasks_TasksResponse(buffer_arg) {
  return tasks_pb.TasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaskServiceService = exports.TaskServiceService = {
  create: {
    path: '/tasks.TaskService/Create',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.Task,
    responseType: tasks_pb.TaskResponse,
    requestSerialize: serialize_tasks_Task,
    requestDeserialize: deserialize_tasks_Task,
    responseSerialize: serialize_tasks_TaskResponse,
    responseDeserialize: deserialize_tasks_TaskResponse,
  },
  read: {
    path: '/tasks.TaskService/Read',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskRequest,
    responseType: tasks_pb.TaskResponse,
    requestSerialize: serialize_tasks_TaskRequest,
    requestDeserialize: deserialize_tasks_TaskRequest,
    responseSerialize: serialize_tasks_TaskResponse,
    responseDeserialize: deserialize_tasks_TaskResponse,
  },
  update: {
    path: '/tasks.TaskService/Update',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.Task,
    responseType: tasks_pb.TaskResponse,
    requestSerialize: serialize_tasks_Task,
    requestDeserialize: deserialize_tasks_Task,
    responseSerialize: serialize_tasks_TaskResponse,
    responseDeserialize: deserialize_tasks_TaskResponse,
  },
  delete: {
    path: '/tasks.TaskService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.DeleteTaskRequest,
    responseType: tasks_pb.DeleteTaskResponse,
    requestSerialize: serialize_tasks_DeleteTaskRequest,
    requestDeserialize: deserialize_tasks_DeleteTaskRequest,
    responseSerialize: serialize_tasks_DeleteTaskResponse,
    responseDeserialize: deserialize_tasks_DeleteTaskResponse,
  },
  list: {
    path: '/tasks.TaskService/List',
    requestStream: false,
    responseStream: false,
    requestType: google_protobuf_empty_pb.Empty,
    responseType: tasks_pb.TasksResponse,
    requestSerialize: serialize_google_protobuf_Empty,
    requestDeserialize: deserialize_google_protobuf_Empty,
    responseSerialize: serialize_tasks_TasksResponse,
    responseDeserialize: deserialize_tasks_TasksResponse,
  },
};

exports.TaskServiceClient = grpc.makeGenericClientConstructor(TaskServiceService);
