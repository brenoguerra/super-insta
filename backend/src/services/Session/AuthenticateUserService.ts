import { getRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';

import User from '../../models/User';

import authConfig from '../../config/auth';

interface Request {
  username: string;
  password: string;
}

interface Response {
  user: User;
  token: string;
}

class AuthenticateUserService {
  public async execute({ username, password }: Request): Promise<Response> {
    const usersRepository = getRepository(User);

    const user = await usersRepository.findOne({
      where: {
        username,
      },
    });

    if (!user) throw new Error('Invalid username or password');

    const isCorrectPassword = await compare(password, user.password);

    if (!isCorrectPassword) throw new Error('Invalid username or password');

    const token = sign({}, authConfig.jwt.secret, {
      subject: user.id,
      expiresIn: authConfig.jwt.expires,
    });

    return {
      user,
      token,
    };
  }
}

export default AuthenticateUserService;
