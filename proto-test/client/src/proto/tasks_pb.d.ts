// package: template
// file: tasks.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as google_protobuf_timestamp_pb from "google-protobuf/google/protobuf/timestamp_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

export class Task extends jspb.Message { 
    getId(): string;
    setId(value: string): Task;
    getName(): string;
    setName(value: string): Task;
    getDescription(): string;
    setDescription(value: string): Task;
    getUserfk(): number;
    setUserfk(value: number): Task;

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
        id: string,
        name: string,
        description: string,
        userfk: number,
        createdAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
        updatedAt?: google_protobuf_timestamp_pb.Timestamp.AsObject,
    }
}

export class TaskRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): TaskRequest;

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
        id: string,
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

export class CreateTaskRequest extends jspb.Message { 
    getName(): string;
    setName(value: string): CreateTaskRequest;
    getDescription(): string;
    setDescription(value: string): CreateTaskRequest;
    getAccessToken(): string;
    setAccessToken(value: string): CreateTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateTaskRequest): CreateTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateTaskRequest;
    static deserializeBinaryFromReader(message: CreateTaskRequest, reader: jspb.BinaryReader): CreateTaskRequest;
}

export namespace CreateTaskRequest {
    export type AsObject = {
        name: string,
        description: string,
        accessToken: string,
    }
}

export class ListTasksRequest extends jspb.Message { 
    getAccessToken(): string;
    setAccessToken(value: string): ListTasksRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTasksRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTasksRequest): ListTasksRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTasksRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTasksRequest;
    static deserializeBinaryFromReader(message: ListTasksRequest, reader: jspb.BinaryReader): ListTasksRequest;
}

export namespace ListTasksRequest {
    export type AsObject = {
        accessToken: string,
    }
}

export class UpdateTaskRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): UpdateTaskRequest;
    getName(): string;
    setName(value: string): UpdateTaskRequest;
    getDescription(): string;
    setDescription(value: string): UpdateTaskRequest;
    getAccessToken(): string;
    setAccessToken(value: string): UpdateTaskRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateTaskRequest): UpdateTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateTaskRequest;
    static deserializeBinaryFromReader(message: UpdateTaskRequest, reader: jspb.BinaryReader): UpdateTaskRequest;
}

export namespace UpdateTaskRequest {
    export type AsObject = {
        id: string,
        name: string,
        description: string,
        accessToken: string,
    }
}

export class DeleteTaskRequest extends jspb.Message { 
    getId(): string;
    setId(value: string): DeleteTaskRequest;
    getAccessToken(): string;
    setAccessToken(value: string): DeleteTaskRequest;

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
        id: string,
        accessToken: string,
    }
}
