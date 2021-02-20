import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../../models/User';

interface Request {
  name: string;
  email: string;
  username: string;
  password: string;
}

class CreateUserService {
  public async execute({
    name,
    email,
    username,
    password,
  }: Request): Promise<User> {
    const usersRepository = getRepository(User);

    const checkEmail = await usersRepository.findOne({ where: { email } });

    if (checkEmail) throw new Error('Email already in use');

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      username,
      password: hashedPassword,
    });

    await usersRepository.save(user);

    return user;
  }
}

export default CreateUserService;
