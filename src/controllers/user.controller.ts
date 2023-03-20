import { Request, Response } from 'express';
import tokenFunctions from '../auth/token';
import usersService from '../services/user.service';

const newUser = async (req: Request, res: Response) => {
  const user = await usersService.newUser(req.body);
  const token = tokenFunctions.createToken(user);
  return res.status(201).json({ token });
};

export default { newUser };