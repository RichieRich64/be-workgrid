import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectMongo, connectPostgres } from "./config/db";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use("/api", routes);

const startServer = async () => {
  await connectPostgres();
  await connectMongo();
};

startServer();

export default app;
