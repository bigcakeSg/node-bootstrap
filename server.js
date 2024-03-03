import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import userRouter from './routes/user.routes.js';

dotenv.config();

const port = 5000;

// Connexion DB
connectDb();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use(process.env.ROUTE_BASE_APP + 'user', userRouter);

app.listen(port, () => console.log('Server port :', port));
