import { Router } from 'express';

import usersRouter from './users.routes';

const routes = Router();

routes.get('/', (request, response) => response.json({ ok: true }));
routes.use('/users', usersRouter);

export default routes;
