import Lowdb from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';

const adapter = new FileSync('db.json');
const db = Lowdb(adapter);

db.defaults({
  users: [
    {
      id: 1,
      username: 'admin',
      password: 'admin',
      roleFk: 1, // 1: admin, 2: user
      createdAt: new Date(),
      lastLogin: new Date(),
    },
    {
      id: 2,
      username: 'user',
      password: 'user',
      roleFk: 2, // 1: admin, 2: user
      createdAt: new Date(),
      lastLogin: new Date(),
    },
  ],

  // tasks: [
  //   {
  //     id: 1,
  //     title: 'Task 1',
  //     description: 'Task 1 description',
  //     createdAt: {
  //       seconds: '1667464811',
  //       nanos: 122000000,
  //     },
  //     updatedAt: {
  //       seconds: '1667464811',
  //       nanos: 122000000,
  //     },
  //   },
  // ],
}).write();

export default db;
