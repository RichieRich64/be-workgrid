import express from "express";
import cors from "cors";
import helmet from "helmet";
import { connectMongo, connectPostgres } from "./config/db";
import routes from "./routes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.get("/health", (_req, res) => {
  // res.send("Backend is running");
  res.status(200).json({ status: "ok", message: "Server is healthy" });
});

app.use("/api", routes);

const startServer = async () => {
  await connectPostgres();
  await connectMongo();
};

startServer();

export default app;
