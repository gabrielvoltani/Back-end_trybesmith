import { User } from '../interfaces/user.interface';
import usersModel from '../models/user.model';

const newUser = async (userInfo: User): Promise<User> => {
  const user: User = await usersModel.newUser(userInfo);
  return user;
};

export default { newUser };