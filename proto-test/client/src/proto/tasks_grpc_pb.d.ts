// package: template
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as tasks_pb from "./tasks_pb";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ITaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createTask: ITaskServiceService_ICreateTask;
    getTask: ITaskServiceService_IGetTask;
    listTasks: ITaskServiceService_IListTasks;
    updateTask: ITaskServiceService_IUpdateTask;
    deleteTask: ITaskServiceService_IDeleteTask;
}

interface ITaskServiceService_ICreateTask extends grpc.MethodDefinition<tasks_pb.CreateTaskRequest, tasks_pb.Task> {
    path: "/template.TaskService/CreateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.CreateTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.CreateTaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITaskServiceService_IGetTask extends grpc.MethodDefinition<tasks_pb.TaskRequest, tasks_pb.Task> {
    path: "/template.TaskService/GetTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.TaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.TaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITaskServiceService_IListTasks extends grpc.MethodDefinition<tasks_pb.ListTasksRequest, tasks_pb.TasksResponse> {
    path: "/template.TaskService/ListTasks";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.ListTasksRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.ListTasksRequest>;
    responseSerialize: grpc.serialize<tasks_pb.TasksResponse>;
    responseDeserialize: grpc.deserialize<tasks_pb.TasksResponse>;
}
interface ITaskServiceService_IUpdateTask extends grpc.MethodDefinition<tasks_pb.UpdateTaskRequest, tasks_pb.Task> {
    path: "/template.TaskService/UpdateTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.UpdateTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.UpdateTaskRequest>;
    responseSerialize: grpc.serialize<tasks_pb.Task>;
    responseDeserialize: grpc.deserialize<tasks_pb.Task>;
}
interface ITaskServiceService_IDeleteTask extends grpc.MethodDefinition<tasks_pb.DeleteTaskRequest, google_protobuf_empty_pb.Empty> {
    path: "/template.TaskService/DeleteTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tasks_pb.DeleteTaskRequest>;
    requestDeserialize: grpc.deserialize<tasks_pb.DeleteTaskRequest>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const TaskServiceService: ITaskServiceService;

export interface ITaskServiceServer extends grpc.UntypedServiceImplementation {
    createTask: grpc.handleUnaryCall<tasks_pb.CreateTaskRequest, tasks_pb.Task>;
    getTask: grpc.handleUnaryCall<tasks_pb.TaskRequest, tasks_pb.Task>;
    listTasks: grpc.handleUnaryCall<tasks_pb.ListTasksRequest, tasks_pb.TasksResponse>;
    updateTask: grpc.handleUnaryCall<tasks_pb.UpdateTaskRequest, tasks_pb.Task>;
    deleteTask: grpc.handleUnaryCall<tasks_pb.DeleteTaskRequest, google_protobuf_empty_pb.Empty>;
}

export interface ITaskServiceClient {
    createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    getTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    listTasks(request: tasks_pb.ListTasksRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    listTasks(request: tasks_pb.ListTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    listTasks(request: tasks_pb.ListTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}

export class TaskServiceClient extends grpc.Client implements ITaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createTask(request: tasks_pb.CreateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public createTask(request: tasks_pb.CreateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.TaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public getTask(request: tasks_pb.TaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public listTasks(request: tasks_pb.ListTasksRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    public listTasks(request: tasks_pb.ListTasksRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    public listTasks(request: tasks_pb.ListTasksRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.TasksResponse) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public updateTask(request: tasks_pb.UpdateTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tasks_pb.Task) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.DeleteTaskRequest, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
    public deleteTask(request: tasks_pb.DeleteTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientUnaryCall;
}
