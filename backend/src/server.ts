import express from 'express';
import routes from './routes';
import cors from 'cors';

import './database';

const app = express();

app.disable('x-powered-by');
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333, () => console.log('🔥 Server running at port 3333'));
