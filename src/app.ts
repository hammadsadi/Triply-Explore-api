import express, { Application, Request, Response } from "express";
import notFound from "./app/middlewares/notFound";
import cors from 'cors';
const app: Application = express();

// Parser
app.use(express.json());
app.use(express.text());
app.use(cors());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World..!");
});

// Global Middleware
app.use(notFound);

export default app;
