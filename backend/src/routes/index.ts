import { Router } from 'express';

import usersRouter from './users.routes';
import sessionsRouter from './sessions.routes';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

const routes = Router();

routes.get('/', ensureAuthenticated, (request, response) =>
  response.json({ ok: true }),
);
routes.use('/users', usersRouter);
routes.use('/sessions', sessionsRouter);

export default routes;
