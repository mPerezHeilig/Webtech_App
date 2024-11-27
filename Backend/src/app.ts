// bearbeitet von Marcia Perez Heilig

import express, {Express} from 'express';
import router from './routes/trip_routes';

const app: Express = express();

app.use(express.json());
app.use("/", router);
app.use(express.static('public'));
app.use("/api", router);

export default app;