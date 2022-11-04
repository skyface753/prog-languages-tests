import Lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = Lowdb(adapter);

db.defaults({
  tasks: [
    {
      id: 1,
      title: 'Task 1',
      description: 'Task 1 description',
      createdAt: {
        seconds: '1667464811',
        nanos: 122000000,
      },
      updatedAt: {
        seconds: '1667464811',
        nanos: 122000000,
      },
    },
  ],
}).write();

export default db;
