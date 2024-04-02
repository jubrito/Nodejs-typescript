import express from 'express';
import todoRoutes from './routes/todos';

const app = express();

app.use('/todos', todoRoutes);

app.listen(8080);
