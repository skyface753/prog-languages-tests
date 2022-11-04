import React from 'react';
import logo from './logo.svg';
import './App.css';
// import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import grpcClient from './grpc-client';
// import { Task, TasksResponse } from './proto/tasks_pb';
import { User, LoginRequest, LoginResponse } from './proto/auth_pb';

function App() {
  const [loginRequest, setLoginRequest] = React.useState<LoginRequest.AsObject>(
    new LoginRequest().toObject()
  );
  // const [user, setUser] = React.useState<User.AsObject | undefined>(undefined);
  const [loginResponse, setLoginResponse] = React.useState<
    LoginResponse.AsObject | undefined
  >(undefined);
  // const [tasks, setTasks] = React.useState<Task.AsObject[]>([]);
  // const [newTask, setNewTask] = React.useState<Task.AsObject>(
  //   new Task()
  //     .setTitle('New Task')
  //     .setDescription('New Task Description')
  //     .toObject()
  // );

  // React.useEffect(() => {
  //   grpcClient.list(new Empty(), {}, (err, response: TasksResponse) => {
  //     if (err) {
  //       console.error(err);
  //       return;
  //     }
  //     setTasks(response.toObject().tasksList);
  //   });

  // }, []);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />

        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
      <body>
        <div>
          {loginResponse && (
            <div>
              <p>Token: {loginResponse.accessToken}</p>
              <p>Refresh Token: {loginResponse.refreshToken}</p>
              <p>CSRF Token: {loginResponse.csrfToken}</p>
            </div>
          )}

          <h1>Login</h1>
          <div>
            <label htmlFor='username'>Username</label>
            <input
              type='text'
              id='username'
              value={loginRequest.username}
              onChange={(e) =>
                setLoginRequest({ ...loginRequest, username: e.target.value })
              }
            />
          </div>
          <div>
            <label htmlFor='password'>Password</label>
            <input
              type='password'
              id='password'
              value={loginRequest.password}
              onChange={(e) =>
                setLoginRequest({ ...loginRequest, password: e.target.value })
              }
            />
          </div>
          <button
            onClick={() => {
              grpcClient.login(
                new LoginRequest()
                  .setUsername(loginRequest.username)
                  .setPassword(loginRequest.password),
                {},
                (err, response: LoginResponse) => {
                  if (err) {
                    console.error(err);
                    return;
                  }
                  setLoginResponse(response.toObject());
                }
              );
            }}
          >
            Login
          </button>
        </div>
        {/* {tasks.map((task) => (
          <p key={task.id}>{task.title}</p>
        ))}
        <h1>Create a new Task</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label htmlFor='title'>Title</label>
          <input
            type='text'
            id='title'
            name='title'
            value={newTask.title}
            onChange={(e) => {
              setNewTask({ ...newTask, title: e.target.value });
            }}
          />
          <label htmlFor='description'>Description</label>
          <input
            type='text'
            id='description'
            name='description'
            value={newTask.description}
            onChange={(e) => {
              setNewTask({ ...newTask, description: e.target.value });
            }}
          />
          <button
            onClick={() => {
              const task = new Task();
              task.setTitle(newTask.title);
              task.setDescription(newTask.description);
              grpcClient.create(task, {}, (err, response: Task) => {
                if (err) {
                  console.error(err);
                  return;
                }
                console.log(response.toObject());
              });
            }}
          >
            Create
          </button>
        </form> */}
      </body>
    </div>
  );
}

export default App;
