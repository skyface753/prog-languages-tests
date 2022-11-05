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
  tasks: [],
}).write();

export default db;
