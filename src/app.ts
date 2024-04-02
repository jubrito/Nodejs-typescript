import express, { Request, Response, NextFunction } from 'express';
import todoRoutes from './routes/todos';
import {json} from 'body-parser';

const app = express();

app.use(json()); // parse the bodies of all incoming requests and extracts any json data found to populate the body key with the parsed json data

app.use('/todos', todoRoutes);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    res.status(500).json({message: err.message})
})

app.listen(8080);
