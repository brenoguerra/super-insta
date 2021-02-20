import { Router } from 'express';

import CreateUserService from '../services/User/CreateUserService';

const usersRouter = Router();

usersRouter.post('/', async (request, response) => {
  try {
    const { name, email, username, password } = request.body;

    const createUser = new CreateUserService();

    const user = await createUser.execute({
      name,
      email,
      username,
      password,
    });

    delete user.password;

    return response.json({
      content: user,
      message: 'User created',
      status: 200,
    });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default usersRouter;
