// Initialize express, mongoose, cors, dotenv
import express, { Request, Response } from "express";
import "dotenv/config";
import cors from "cors";
import { connectDb } from "./config/db.config";

const app = express();
const PORT = 5000 || process.env.PORT;
// Middleware that converts the body from the request sent to server to JSON
app.use(express.json());
app.use(cors());

// Connect DB
connectDb();

app.get("/test", async (req: Request, res: Response) => {
  res.json({
    message: "test",
  });
});

app.listen(PORT, () => {
  console.log(`Server is running at PORT: ${PORT}`);
});
