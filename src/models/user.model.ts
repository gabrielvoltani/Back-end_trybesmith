import { ResultSetHeader } from 'mysql2';
import { User } from '../interfaces/user.interface';
import connection from './connection';

const newUser = async (userInfo: User): Promise<User> => {
  const { username, vocation, level, password } = userInfo;
  const [{ insertId }] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, vocation, level, password) VALUES (?, ?, ?, ?)',
    [username, vocation, level, password],
  );
  return { id: insertId, username, vocation, level };
};

export default { newUser };