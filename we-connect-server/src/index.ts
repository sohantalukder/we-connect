'use strict';
import express, { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000; // Add a fallback value in case `PORT` is undefined

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
