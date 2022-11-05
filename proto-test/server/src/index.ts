import * as grpc from '@grpc/grpc-js';
import { handleUnaryCall } from '@grpc/grpc-js';
// import { ITaskServiceServer, TaskServiceService } from './proto/tasks_grpc_pb';
import { IAuthServiceServer, AuthServiceService } from './proto/auth_grpc_pb';
import { ITaskServiceServer, TaskServiceService } from './proto/tasks_grpc_pb';
import { addReflection } from 'grpc-server-reflection';
// import * as grpcmiddleware from './grpc-middleware';

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
import {
  CreateTaskRequest,
  TaskRequest,
  TasksResponse,
  UpdateTaskRequest,
  DeleteTaskRequest,
  Task,
  ListTasksRequest,
} from './proto/tasks_pb';

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
  }

  static async validateAccessToken(accessToken: string, callback: any) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (accessToken === '123') {
          resolve(true);
        } else {
          callback(new Error('invalid access token'), null);
          // throw new Error('invalid access token');
          // reject(false);
        }
      }, 1000);
    });
    // const userId = Object.keys(accessTokens).find(
    //   (key) => accessTokens[key] === accessToken
    // );
    // if (userId) {
    //   return true;
    // }
    // return false;
  }
}

// async function testMiddleware(token: string, callback: any) {
//   console.log('token', token);

//   return new Promise<void>((resolve) => {
//     setTimeout(() => {
//       if (token !== '123') {
//         // reject(new Error('invalid token'));
//         callback(new Error('invalid token'));
//       } else {
//         console.log('token VALID', token);
//         resolve();
//       }
//     }, 1000);
//   });
// }

class TaskServer implements ITaskServiceServer {
  // listTasks: grpc.handleUnaryCall<Empty, TasksResponse>;

  [name: string]: grpc.UntypedHandleCall;

  // createTask: grpc.handleUnaryCall<CreateTaskRequest, Task>;
  async createTask(
    call: grpc.ServerUnaryCall<CreateTaskRequest, Task>,
    callback: grpc.sendUnaryData<Task>
  ): Promise<void> {
    // Create a Task
    const { name, description, accessToken } = call.request.toObject();
    // Middleware
    await AuthServer.validateAccessToken(accessToken, callback);
    // await testMiddleware(accessToken, callback);

    // try {
    //   await testMiddleware(accessToken);
    // } catch (e) {
    //   callback(e, null);
    // }
    console.log(accessToken);
    const userId = Object.keys(accessTokens).find(
      (key) => accessTokens[key] === accessToken
    );
    console.log('userId', userId);
    if (!userId) {
      callback(new Error('user not found'), null);
    }
    const dbTasks = db.get('tasks') as any;
    const id = (dbTasks.value().length + 1).toString();
    const timestamp1 = new timestamp.Timestamp();
    timestamp1.fromDate(new Date());
    const task = new Task();
    task.setId(id);
    task.setName(name);
    task.setDescription(description);
    task.setUserfk(parseInt(userId));
    task.setCreatedAt(timestamp1);
    task.setUpdatedAt(timestamp1);
    dbTasks.push(task.toObject()).write();
    console.log(task.toObject());
    callback(null, task);
  }
  // getTask: grpc.handleUnaryCall<TaskRequest, Task>;
  getTask(
    call: grpc.ServerUnaryCall<TaskRequest, Task>,
    callback: grpc.sendUnaryData<Task>
  ): void {
    // Get a Task
    const { id } = call.request.toObject();
    const task = db
      .get('tasks')
      .value()
      .find((task: Task.AsObject) => {
        return task.id === id;
      });
    if (!task) {
      callback(new Error('task not found'), null);
    }
    const taskResponse = new Task();
    taskResponse.setId(task.id);
    taskResponse.setName(task.name);
    taskResponse.setDescription(task.description);
    const createdAt = new timestamp.Timestamp();
    createdAt.setSeconds(task.createdAt?.seconds || 0);
    createdAt.setNanos(task.createdAt?.nanos || 0);
    const updatedAt = new timestamp.Timestamp();
    updatedAt.setSeconds(task.updatedAt?.seconds || 0);
    updatedAt.setNanos(task.updatedAt?.nanos || 0);
    taskResponse.setCreatedAt(createdAt);
    taskResponse.setUpdatedAt(updatedAt);

    callback(null, taskResponse);
  }
  listTasks(
    call: grpc.ServerUnaryCall<ListTasksRequest, TasksResponse>,
    callback: grpc.sendUnaryData<TasksResponse>
  ): void {
    const { accessToken } = call.request.toObject();
    console.log(accessToken);
    const userId = Object.keys(accessTokens).find(
      (key) => accessTokens[key] == accessToken
    );
    if (!userId) {
      callback(new Error('user not found'), null);
    }
    const tasksDb = db
      .get('tasks')
      .value()
      .filter((task: Task.AsObject) => {
        return task.userfk === parseInt(userId);
      });
    const tasksResponse = new TasksResponse();
    tasksDb.forEach((task: Task.AsObject) => {
      const taskResponse = new Task();
      taskResponse.setId(task.id);
      taskResponse.setName(task.name);
      taskResponse.setUserfk(task.userfk);
      taskResponse.setDescription(task.description);
      const createdAt = new timestamp.Timestamp();
      createdAt.setSeconds(task.createdAt?.seconds || 0);
      createdAt.setNanos(task.createdAt?.nanos || 0);
      const updatedAt = new timestamp.Timestamp();
      updatedAt.setSeconds(task.updatedAt?.seconds || 0);
      updatedAt.setNanos(task.updatedAt?.nanos || 0);
      taskResponse.setCreatedAt(createdAt);
      taskResponse.setUpdatedAt(updatedAt);
      tasksResponse.addTasks(taskResponse);
    });
    callback(null, tasksResponse);
  }
  // List all Tasks
  //   const tasks = db.get('tasks').value();
  //   const tasksResponse = new TasksResponse();
  //   tasks.forEach((task: Task.AsObject) => {
  //     const taskResponse = new Task();
  //     taskResponse.setId(task.id);
  //     taskResponse.setName(task.name);
  //     taskResponse.setDescription(task.description);
  //     const createdAt = new timestamp.Timestamp();
  //     createdAt.setSeconds(task.createdAt?.seconds || 0);
  //     createdAt.setNanos(task.createdAt?.nanos || 0);
  //     const updatedAt = new timestamp.Timestamp();
  //     updatedAt.setSeconds(task.updatedAt?.seconds || 0);
  //     updatedAt.setNanos(task.updatedAt?.nanos || 0);
  //     taskResponse.setCreatedAt(createdAt);
  //     taskResponse.setUpdatedAt(updatedAt);

  //     tasksResponse.addTasks(taskResponse);
  //   });
  //   callback(null, tasksResponse);
  // }

  updateTask: grpc.handleUnaryCall<UpdateTaskRequest, Task>;
  deleteTask: grpc.handleUnaryCall<DeleteTaskRequest, Empty>;
}

function testMiddlewareGRPC() {
  console.log('HALLO');
}

function serve(): void {
  // const server = new mali();
  const server = new grpc.Server();
  // const server = new grpcmiddleware.Server();
  addReflection(server, './src/proto/descriptor_set.bin');
  server.addService(AuthServiceService, new AuthServer());
  server.addService(TaskServiceService, new TaskServer());
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
