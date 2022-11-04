import * as grpc from '@grpc/grpc-js';
import { handleUnaryCall } from '@grpc/grpc-js';
import { ITaskServiceServer, TaskServiceService } from './proto/tasks_grpc_pb';
import {
  Task,
  TaskResponse,
  TaskRequest,
  TasksResponse,
  DeleteTaskRequest,
  DeleteTaskResponse,
} from './proto/tasks_pb';
import * as timestamp from 'google-protobuf/google/protobuf/timestamp_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import db from './db';

class TasksServer implements ITaskServiceServer {
  update: grpc.handleUnaryCall<Task, TaskResponse>;
  read: grpc.handleUnaryCall<TaskRequest, TaskResponse>;
  [name: string]: import('@grpc/grpc-js').UntypedHandleCall;
  create(
    call: grpc.ServerUnaryCall<Task, TaskResponse>,
    callback: grpc.sendUnaryData<TaskResponse>
  ): void {
    const task = new Task();
    const dbTasks = db.get('tasks') as any;
    task.setId(dbTasks.value().length + 1);
    task.setTitle('Task 1');
    task.setDescription('Task 1 description');
    const timestamp1 = new timestamp.Timestamp();
    timestamp1.fromDate(new Date());

    task.setCreatedAt(timestamp1);
    task.setUpdatedAt(timestamp1);
    dbTasks.push(task.toObject()).write();

    // task.setCreatedAt(new Date().toISOString());
    // task.setUpdatedAt(new Date().toISOString());
    const taskResponse = new TaskResponse();
    taskResponse.setTask(task);
    callback(null, taskResponse);
  }
  list(
    call: grpc.ServerUnaryCall<Empty, TasksResponse>,
    callback: grpc.sendUnaryData<TasksResponse>
  ): void {
    const tasksResponse = new TasksResponse();
    const tasks = db.get('tasks').value();
    tasks.map((task: Task.AsObject) => {
      const task1 = new Task();
      task1.setId(task.id);
      task1.setTitle(task.title);
      task1.setDescription(task.description);
      const createdAt = new timestamp.Timestamp();
      createdAt.setSeconds(task.createdAt.seconds);
      createdAt.setNanos(task.createdAt.nanos);
      task1.setCreatedAt(createdAt);
      const updatedAt = new timestamp.Timestamp();
      updatedAt.setSeconds(task.updatedAt.seconds);
      updatedAt.setNanos(task.updatedAt.nanos);
      task1.setUpdatedAt(updatedAt);
      tasksResponse.addTasks(task1);
    });
    callback(null, tasksResponse);
  }
  //rpc Delete(DeleteTaskRequest) returns (DeleteTaskResponse);
  delete(
    call: grpc.ServerUnaryCall<DeleteTaskRequest, DeleteTaskResponse>,
    callback: grpc.sendUnaryData<DeleteTaskResponse>
  ): void {
    const deleteTaskRespone = new DeleteTaskResponse();
    const deleteTaskRequest = call.request;
    const id = deleteTaskRequest.getId();

    const dbTasks = db.get('tasks') as any;
    const task = dbTasks.find({ id }).value();
    if (task) {
      dbTasks.remove({ id }).write();
      deleteTaskRespone.setSuccess(true);
      deleteTaskRespone.setMessage('Task deleted successfully');
    } else {
      deleteTaskRespone.setSuccess(false);
      deleteTaskRespone.setMessage('Task not found');
    }
    callback(null, deleteTaskRespone);
  }
}

function serve(): void {
  const server = new grpc.Server();

  server.addService(TaskServiceService, new TasksServer());
  process.env.PORT = '8080';
  server.bindAsync(
    `localhost:${process.env.PORT}`,
    grpc.ServerCredentials.createInsecure(),
    (err, port) => {
      if (err) {
        throw err;
      }
      console.log(`Listening on ${port}`);
      server.start();
    }
  );
}

serve();
