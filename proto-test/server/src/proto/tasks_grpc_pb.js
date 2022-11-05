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

function serialize_template_CreateTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.CreateTaskRequest)) {
    throw new Error('Expected argument of type template.CreateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_CreateTaskRequest(buffer_arg) {
  return tasks_pb.CreateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_DeleteTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.DeleteTaskRequest)) {
    throw new Error('Expected argument of type template.DeleteTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_DeleteTaskRequest(buffer_arg) {
  return tasks_pb.DeleteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_ListTasksRequest(arg) {
  if (!(arg instanceof tasks_pb.ListTasksRequest)) {
    throw new Error('Expected argument of type template.ListTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_ListTasksRequest(buffer_arg) {
  return tasks_pb.ListTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_Task(arg) {
  if (!(arg instanceof tasks_pb.Task)) {
    throw new Error('Expected argument of type template.Task');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_Task(buffer_arg) {
  return tasks_pb.Task.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_TaskRequest(arg) {
  if (!(arg instanceof tasks_pb.TaskRequest)) {
    throw new Error('Expected argument of type template.TaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_TaskRequest(buffer_arg) {
  return tasks_pb.TaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_TasksResponse(arg) {
  if (!(arg instanceof tasks_pb.TasksResponse)) {
    throw new Error('Expected argument of type template.TasksResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_TasksResponse(buffer_arg) {
  return tasks_pb.TasksResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_template_UpdateTaskRequest(arg) {
  if (!(arg instanceof tasks_pb.UpdateTaskRequest)) {
    throw new Error('Expected argument of type template.UpdateTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_template_UpdateTaskRequest(buffer_arg) {
  return tasks_pb.UpdateTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var TaskServiceService = exports.TaskServiceService = {
  createTask: {
    path: '/template.TaskService/CreateTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.CreateTaskRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_template_CreateTaskRequest,
    requestDeserialize: deserialize_template_CreateTaskRequest,
    responseSerialize: serialize_template_Task,
    responseDeserialize: deserialize_template_Task,
  },
  getTask: {
    path: '/template.TaskService/GetTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.TaskRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_template_TaskRequest,
    requestDeserialize: deserialize_template_TaskRequest,
    responseSerialize: serialize_template_Task,
    responseDeserialize: deserialize_template_Task,
  },
  listTasks: {
    path: '/template.TaskService/ListTasks',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.ListTasksRequest,
    responseType: tasks_pb.TasksResponse,
    requestSerialize: serialize_template_ListTasksRequest,
    requestDeserialize: deserialize_template_ListTasksRequest,
    responseSerialize: serialize_template_TasksResponse,
    responseDeserialize: deserialize_template_TasksResponse,
  },
  updateTask: {
    path: '/template.TaskService/UpdateTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.UpdateTaskRequest,
    responseType: tasks_pb.Task,
    requestSerialize: serialize_template_UpdateTaskRequest,
    requestDeserialize: deserialize_template_UpdateTaskRequest,
    responseSerialize: serialize_template_Task,
    responseDeserialize: deserialize_template_Task,
  },
  deleteTask: {
    path: '/template.TaskService/DeleteTask',
    requestStream: false,
    responseStream: false,
    requestType: tasks_pb.DeleteTaskRequest,
    responseType: google_protobuf_empty_pb.Empty,
    requestSerialize: serialize_template_DeleteTaskRequest,
    requestDeserialize: deserialize_template_DeleteTaskRequest,
    responseSerialize: serialize_google_protobuf_Empty,
    responseDeserialize: deserialize_google_protobuf_Empty,
  },
};

exports.TaskServiceClient = grpc.makeGenericClientConstructor(TaskServiceService);
