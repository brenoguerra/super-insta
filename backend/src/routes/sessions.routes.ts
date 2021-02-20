import { Router } from 'express';

import AuthenticateUserService from '../services/Session/AuthenticateUserService';

const sessionRouter = Router();

sessionRouter.post('/', async (request, response) => {
  try {
    const { username, password } = request.body;

    const authenticateUser = new AuthenticateUserService();

    const { user, token } = await authenticateUser.execute({
      username,
      password,
    });

    delete user.password;

    return response.json({ user, token });
  } catch (error) {
    return response.status(400).json({ error: error.message });
  }
});

export default sessionRouter;
