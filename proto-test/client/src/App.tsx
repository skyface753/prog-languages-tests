import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { TaskServiceClient } from './proto/tasks_grpc_web_pb';
import { credentials } from '@grpc/grpc-js';
import { CallOptions } from 'grpc-web';
function App() {
  const client = new TaskServiceClient('http://localhost:8000', null, null);
  const request = new Empty();
  var stream = client.list(request, null, (err, response) => {
    if (err) {
      console.log(err);
    } else {
      console.log(response);
    }
  });
  stream.on('data', (response: any) => {
    console.log(response);
  });

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
