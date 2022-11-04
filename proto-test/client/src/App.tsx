import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import grpcClient from './grpc-client';
import { Task, TasksResponse } from './proto/tasks_pb';

function App() {
  const [tasks, setTasks] = React.useState<Task.AsObject[]>([]);

  React.useEffect(() => {
    grpcClient.list(new Empty(), {}, (err, response: TasksResponse) => {
      if (err) {
        console.error(err);
        return;
      }
      setTasks(response.toObject().tasksList);
    });
    const newTask = new Task();
    newTask.setId(1);
    newTask.setTitle('New Task');
    grpcClient.create(newTask, {}, (err, response: Task) => {
      if (err) {
        console.error(err);
        return;
      }
      console.log(response.toObject());
    });
  }, []);

  console.log(tasks);

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
    </div>
  );
}

export default App;
