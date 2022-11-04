// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as tasks_pb from "./tasks_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ITaskServiceService_ICreate;
    read: ITaskServiceService_IRead;
    update: ITaskServiceService_IUpdate;
    delete: ITaskServiceService_IDelete;
    list: ITaskServiceService_IList;
}

interface ITaskServiceService_ICreate extends grpc.MethodDefinition<tasks_pb.Task, tasks_pb.TaskResponse> {
    path: "/tasks.TaskService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.Task>;
    requestDeserialize: grpc.deserialize<tasks_pb.Task>;
    responseSerialize: grpc.serialize<tasks_pb.TaskResponse>;
    responseDeserialize: grpc.deserialize<tasks_pb.TaskResponse>;
}
interface ITaskServiceService_IRead extends grpc.MethodDefinition<tasks_pb.TaskRequest, tasks_pb.TaskResponse> {
    path: "/tasks.TaskService/Read";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.TaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.TaskResponse>;
    responseDeserialize: grpc.deserialize<tasks_pb.TaskResponse>;
}
interface ITaskServiceService_IUpdate extends grpc.MethodDefinition<tasks_pb.Task, tasks_pb.TaskResponse> {
    path: "/tasks.TaskService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.Task>;
    requestDeserialize: grpc.deserialize<tasks_pb.Task>;
    responseSerialize: grpc.serialize<tasks_pb.TaskResponse>;
    responseDeserialize: grpc.deserialize<tasks_pb.TaskResponse>;
}
interface ITaskServiceService_IDelete extends grpc.MethodDefinition<tasks_pb.DeleteTaskRequest, tasks_pb.DeleteTaskResponse> {
    path: "/tasks.TaskService/Delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.DeleteTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.DeleteTaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.DeleteTaskResponse>;
    responseDeserialize: grpc.deserialize<tasks_pb.DeleteTaskResponse>;
}
interface ITaskServiceService_IList extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, tasks_pb.TasksResponse> {
    path: "/tasks.TaskService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<tasks_pb.TasksResponse>;
    responseDeserialize: grpc.deserialize<tasks_pb.TasksResponse>;
}

export const TaskServiceService: ITaskServiceService;

export interface ITaskServiceServer extends grpc.UntypedServiceImplementation {
    create: grpc.handleUnaryCall<tasks_pb.Task, tasks_pb.TaskResponse>;
    read: grpc.handleUnaryCall<tasks_pb.TaskRequest, tasks_pb.TaskResponse>;
    update: grpc.handleUnaryCall<tasks_pb.Task, tasks_pb.TaskResponse>;
    delete: grpc.handleUnaryCall<tasks_pb.DeleteTaskRequest, tasks_pb.DeleteTaskResponse>;
    list: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, tasks_pb.TasksResponse>;
}

export interface ITaskServiceClient {
    create(request: tasks_pb.Task, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    create(request: tasks_pb.Task, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    create(request: tasks_pb.Task, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    read(request: tasks_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    read(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    read(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    update(request: tasks_pb.Task, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    update(request: tasks_pb.Task, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    update(request: tasks_pb.Task, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    delete(request: tasks_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    delete(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    delete(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
}

export class TaskServiceClient extends grpc.Client implements ITaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: tasks_pb.Task, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public create(request: tasks_pb.Task, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public create(request: tasks_pb.Task, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public read(request: tasks_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public read(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public read(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public update(request: tasks_pb.Task, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public update(request: tasks_pb.Task, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public update(request: tasks_pb.Task, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TaskResponse) => void): grpc.ClientUnaryCall;
    public delete(request: tasks_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public delete(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public delete(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.DeleteTaskResponse) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    public list(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
}
