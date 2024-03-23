import express, { Express } from 'express';
import journalRouter from './journal/journal.router';
import dotenv from 'dotenv';
import * as mongoose from 'mongoose';

dotenv.config();
const app: Express = express();

app.use(express.json());

const PORT: number = Number(process.env.PORT || 3000);

app.use('/api/journals', journalRouter);

app
  .listen(PORT, async (): Promise<void> => {
    await mongoose.connect(process.env.MONGO_URI as string);
    console.log(`Server running in http://localhost:${PORT}/`);
  })
  .on('error', (error: Error) => console.error('Something went wrong', error));
