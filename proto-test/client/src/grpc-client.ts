// import { TaskServiceClient } from './proto/tasks_grpc_web_pb';

import { TaskServiceClient } from './proto/tasks_grpc_web_pb';

// import { ChannelCredentials } from '@grpc/grpc-js';
// import { grpc } from '@improbable-eng/grpc-web';

export default new TaskServiceClient('http://localhost:8000', null, null);
