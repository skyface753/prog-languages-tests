import * as grpc from '@grpc/grpc-js';
import { handleUnaryCall } from '@grpc/grpc-js';
// import { ITaskServiceServer, TaskServiceService } from './proto/tasks_grpc_pb';
import { IAuthServiceServer, AuthServiceService } from './proto/auth_grpc_pb';
// import {
//   Task,
//   TaskResponse,
//   TaskRequest,
//   TasksResponse,
//   DeleteTaskRequest,
//   DeleteTaskResponse,
// } from './proto/tasks_pb';
import {
  LoginRequest,
  LoginResponse,
  RefreshTokenRequest,
  RefreshTokenResponse,
  LogoutRequest,
  LogoutResponse,
  User,
  StatusRequest,
} from './proto/auth_pb';
import * as timestamp from 'google-protobuf/google/protobuf/timestamp_pb';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import db from './db';

const accessTokens: { [key: number]: string } = {};
const refreshTokens: { [key: string]: number } = {};
const csrfTokens: { [key: string]: string } = {};

class AuthServer implements IAuthServiceServer {
  [name: string]: grpc.UntypedHandleCall;
  login(
    call: grpc.ServerUnaryCall<LoginRequest, LoginResponse>,
    callback: grpc.sendUnaryData<LoginResponse>
  ): void {
    const { username, password } = call.request.toObject();
    const user = db
      .get('users')
      .value()
      .find((user: User.AsObject) => {
        return user.username === username && user.password === password;
      });
    console.log(user);
    if (user) {
      const loginResponse = new LoginResponse();
      // Randomly generate access token
      const accessToken = Math.random().toString(36).substring(7);
      const refreshToken = Math.random().toString(36).substring(7);
      const csrfToken = Math.random().toString(36).substring(7);
      accessTokens[user.id] = accessToken;
      refreshTokens[refreshToken] = user.id;
      csrfTokens[csrfToken] = accessToken;
      loginResponse.setAccessToken(accessToken);
      loginResponse.setRefreshToken(refreshToken);
      loginResponse.setCsrfToken(csrfToken);
      callback(null, loginResponse);
    } else {
      callback(new Error('user not found'), null);
    }
  }
  refreshToken(
    call: grpc.ServerUnaryCall<RefreshTokenRequest, RefreshTokenResponse>,
    callback: grpc.sendUnaryData<RefreshTokenResponse>
  ): void {
    const { refreshToken } = call.request.toObject();

    console.log(refreshToken);
    const userId = refreshTokens[refreshToken];
    if (userId) {
      const refreshTokenResponse = new RefreshTokenResponse();
      const accessToken = Math.random().toString(36).substring(7);
      const csrfToken = Math.random().toString(36).substring(7);
      const refreshToken = Math.random().toString(36).substring(7);
      accessTokens[userId] = accessToken;
      refreshTokens[refreshToken] = userId;
      csrfTokens[csrfToken] = accessToken;
      refreshTokenResponse.setAccessToken(accessToken);
      refreshTokenResponse.setRefreshToken(refreshToken);
      refreshTokenResponse.setCsrfToken(csrfToken);
      callback(null, refreshTokenResponse);
    } else {
      callback(new Error('user not found'), null);
    }
  }
  // logout: grpc.handleUnaryCall<LogoutRequest, LogoutResponse>;
  logout(
    call: grpc.ServerUnaryCall<LogoutRequest, LogoutResponse>,
    callback: grpc.sendUnaryData<LogoutResponse>
  ): void {
    const { refreshToken } = call.request.toObject();

    console.log(refreshToken);
    const userId = refreshTokens[refreshToken];
    if (userId) {
      delete accessTokens[userId];
      delete refreshTokens[refreshToken];
      for (const csrfToken in csrfTokens) {
        if (csrfTokens[csrfToken] === accessTokens[userId]) {
          delete csrfTokens[csrfToken];
        }
      }

      callback(null, new LogoutResponse().setSuccess(true));
    } else {
      callback(new Error('user not found'), null);
    }
  }
  status(
    call: grpc.ServerUnaryCall<StatusRequest, User>,
    callback: grpc.sendUnaryData<User>
  ): void {
    const { accessToken, csrfToken } = call.request.toObject();
    console.log(accessToken, csrfToken);
    if (accessToken === csrfTokens[csrfToken]) {
      const userId = Object.keys(accessTokens).find(
        (key) => accessTokens[key] === accessToken
      );
      const user = db
        .get('users')
        .value()
        .find((user: User.AsObject) => {
          return user.id === Number(userId);
        });
      const userResponse = new User();
      userResponse.setId(user.id);
      userResponse.setUsername(user.username);
      // userResponse.setPassword(user.password);
      userResponse.setCreatedat(
        timestamp.Timestamp.fromDate(new Date(user.createdAt))
      );
      userResponse.setLastlogin(
        timestamp.Timestamp.fromDate(new Date(user.lastLogin))
      );
      userResponse.setRolefk(user.roleFk);
      callback(null, userResponse);
    } else {
      callback(new Error('user not found'), null);
    }
    // if (accessToken === 'accessToken' && csrfToken === 'csrfToken') {
    //   const user = new User();
    //   user.setId(1);
    //   user.setUsername('username');
    //   user.setPassword('password');
    //   callback(null, user);
    // } else {
    //   callback(new Error('invalid access token or csrf token'), null);
    // }
  }
}

// class TasksServer implements ITaskServiceServer {
//   update: grpc.handleUnaryCall<Task, TaskResponse>;
//   read: grpc.handleUnaryCall<TaskRequest, TaskResponse>;
//   [name: string]: import('@grpc/grpc-js').UntypedHandleCall;
//   create(
//     call: grpc.ServerUnaryCall<Task, TaskResponse>,
//     callback: grpc.sendUnaryData<TaskResponse>
//   ): void {
//     const createTaskRequest = call.request;
//     const dbTasks = db.get('tasks') as any;
//     createTaskRequest.setId(dbTasks.value().length + 1);
//     const timestamp1 = new timestamp.Timestamp();
//     timestamp1.fromDate(new Date());

//     createTaskRequest.setCreatedAt(timestamp1);
//     createTaskRequest.setUpdatedAt(timestamp1);
//     dbTasks.push(createTaskRequest.toObject()).write();

//     const taskResponse = new TaskResponse();
//     taskResponse.setTask(createTaskRequest);
//     callback(null, taskResponse);
//   }
//   list(
//     call: grpc.ServerUnaryCall<Empty, TasksResponse>,
//     callback: grpc.sendUnaryData<TasksResponse>
//   ): void {
//     const tasksResponse = new TasksResponse();
//     const tasks = db.get('tasks').value();
//     tasks.map((task: Task.AsObject) => {
//       const task1 = new Task();
//       task1.setId(task.id);
//       task1.setTitle(task.title);
//       task1.setDescription(task.description);
//       const createdAt = new timestamp.Timestamp();
//       createdAt.setSeconds(task.createdAt.seconds);
//       createdAt.setNanos(task.createdAt.nanos);
//       task1.setCreatedAt(createdAt);
//       const updatedAt = new timestamp.Timestamp();
//       updatedAt.setSeconds(task.updatedAt.seconds);
//       updatedAt.setNanos(task.updatedAt.nanos);
//       task1.setUpdatedAt(updatedAt);
//       tasksResponse.addTasks(task1);
//     });
//     callback(null, tasksResponse);
//   }
//   //rpc Delete(DeleteTaskRequest) returns (DeleteTaskResponse);
//   delete(
//     call: grpc.ServerUnaryCall<DeleteTaskRequest, DeleteTaskResponse>,
//     callback: grpc.sendUnaryData<DeleteTaskResponse>
//   ): void {
//     const deleteTaskRespone = new DeleteTaskResponse();
//     const deleteTaskRequest = call.request;
//     const id = deleteTaskRequest.getId();

//     const dbTasks = db.get('tasks') as any;
//     const task = dbTasks.find({ id }).value();
//     if (task) {
//       dbTasks.remove({ id }).write();
//       deleteTaskRespone.setSuccess(true);
//       deleteTaskRespone.setMessage('Task deleted successfully');
//     } else {
//       deleteTaskRespone.setSuccess(false);
//       deleteTaskRespone.setMessage('Task not found');
//     }
//     callback(null, deleteTaskRespone);
//   }
// }

function serve(): void {
  const server = new grpc.Server();
  server.addService(AuthServiceService, new AuthServer());
  // server.addService(TaskServiceService, new TasksServer());
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
