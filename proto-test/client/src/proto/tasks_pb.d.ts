// package: tasks
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Task extends jspb.Message { 
    getId(): number;
    setId(value: number): Task;
    getTitle(): string;
    setTitle(value: string): Task;
    getDescription(): string;
    setDescription(value: string): Task;

    hasCreatedAt(): boolean;
    clearCreatedAt(): void;
    getCreatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setCreatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Task;

    hasUpdatedAt(): boolean;
    clearUpdatedAt(): void;
    getUpdatedAt(): google_protobuf_timestamp_pb.Timestamp | undefined;
    setUpdatedAt(value?: google_protobuf_timestamp_pb.Timestamp): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Task.AsObject;
    static toObject(includeInstance: boolean, msg: Task): Task.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Task, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Task;
    static deserializeBinaryFromReader(message: Task, reader: jspb.BinaryReader): Task;
}

export namespace Task {
    export type AsObject = {
        id: number,
        title: string,
        description: string,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TaskRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): TaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TaskRequest): TaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskRequest;
    static deserializeBinaryFromReader(message: TaskRequest, reader: jspb.BinaryReader): TaskRequest;
}

export namespace TaskRequest {
    export type AsObject = {
        id: number,
    }
}

export class TaskResponse extends jspb.Message { 

    hasTask(): boolean;
    clearTask(): void;
    getTask(): Task | undefined;
    setTask(value?: Task): TaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TaskResponse): TaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskResponse;
    static deserializeBinaryFromReader(message: TaskResponse, reader: jspb.BinaryReader): TaskResponse;
}

export namespace TaskResponse {
    export type AsObject = {
        task?: Task.AsObject,
    }
}

export class TasksResponse extends jspb.Message { 
    clearTasksList(): void;
    getTasksList(): Array<Task>;
    setTasksList(value: Array<Task>): TasksResponse;
    addTasks(value?: Task, index?: number): Task;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TasksResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TasksResponse): TasksResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TasksResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TasksResponse;
    static deserializeBinaryFromReader(message: TasksResponse, reader: jspb.BinaryReader): TasksResponse;
}

export namespace TasksResponse {
    export type AsObject = {
        tasksList: Array<Task.AsObject>,
    }
}

export class DeleteTaskRequest extends jspb.Message { 
    getId(): number;
    setId(value: number): DeleteTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskRequest): DeleteTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskRequest;
    static deserializeBinaryFromReader(message: DeleteTaskRequest, reader: jspb.BinaryReader): DeleteTaskRequest;
}

export namespace DeleteTaskRequest {
    export type AsObject = {
        id: number,
    }
}

export class DeleteTaskResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): DeleteTaskResponse;
    getMessage(): string;
    setMessage(value: string): DeleteTaskResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskResponse): DeleteTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskResponse;
    static deserializeBinaryFromReader(message: DeleteTaskResponse, reader: jspb.BinaryReader): DeleteTaskResponse;
}

export namespace DeleteTaskResponse {
    export type AsObject = {
        success: boolean,
        message: string,
    }
}
