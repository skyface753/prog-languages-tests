// import { TaskServiceClient } from './proto/tasks_grpc_web_pb';

import { AuthServiceClient } from './proto/auth_grpc_web_pb';

// import { ChannelCredentials } from '@grpc/grpc-js';
// import { grpc } from '@improbable-eng/grpc-web';

export default new AuthServiceClient('http://localhost:8000', null, null);
