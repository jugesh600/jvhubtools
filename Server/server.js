import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import wordCounterRoutes from "./routes/wordCounterRoute.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/word-counter", wordCounterRoutes);

app.get("/", (req, res) => {
  res.send("JVToolsHub Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});