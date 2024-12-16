import express, { Application, Request, Response } from "express";
import notFound from "./app/middlewares/notFound";
const app: Application = express();
const port = 3000;

// Parser
app.use(express.json());
app.use(express.text());
app.get("/", (req: Request, res: Response) => {
  res.send("Hello World..!");
});

// Global Middleware
app.use(notFound);

export default app;
