import express from 'express';
import morgan from 'morgan';
const app = express();

// Middleware for parsing JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(morgan("tiny"));


// db connection

// routes

export default app;