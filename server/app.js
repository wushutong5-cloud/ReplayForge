import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
}));

app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({
    status: "ok",
    message: "ReplayForge backend is running!",
  });
});

app.listen(PORT, () => {
  console.log(`ReplayForge backend running at http://localhost:${PORT}`);
});