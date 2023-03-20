import jwt, { SignOptions } from 'jsonwebtoken';
import { User } from '../interfaces/user.interface';

const secret: string = process.env.JWT_SECRET as string;
const JWT_CONFIG: SignOptions = {
  algorithm: 'HS256',
  expiresIn: '8d',
};

const createToken = (user: User) => jwt.sign(
  { user },
  secret,
  JWT_CONFIG,
);

const verify = (token: string) => jwt.verify(token, secret);

export default { createToken, verify };