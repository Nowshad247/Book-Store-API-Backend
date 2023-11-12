import express, { Application, Request, Response } from "express";
import config from "./config";
import cors from "cors";

const app: Application = express();
const port = config.port;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Api work Succesfully ");
});

export default app;
