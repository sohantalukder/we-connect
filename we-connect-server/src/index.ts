'use strict';
import express, {Request, Response} from 'express';
import configConstant from './constants/config.constant';
import './configs/mongodb';
import './configs/passport';
import cors from 'cors';
import passport from 'passport';
const app = express();
const port = configConstant.LOCALHOST_PORT;
// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(passport.initialize());

app.get('/', (req: Request, res: Response) => {
  res.send('Express + TypeScript Server is running.');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
