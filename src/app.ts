import express, { Application, Request, Response } from "express";
import notFound from "./app/middlewares/notFound";
import cors from 'cors';
import router from './app/routes/routes';
const app: Application = express();

// Parser
app.use(express.json());
app.use(express.text());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.status(200).json({
    success: true,
    message: 'Triply Explore Server Live 🌐',
  });
});

// Application Routes
app.use('/api/v1', router);
// Global Middleware
app.use(notFound);

export default app;
