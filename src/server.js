import express from 'express';
import authRouter from "./routes/authRoutes.js";
import { connectDb } from './config/database.js';

connectDb();

const app = express();

app.use(express.json());
app.use(authRouter);

const port = process.env.PORT;

app.listen(port, ()=> console.log(`Server is running in port ${port}`));

