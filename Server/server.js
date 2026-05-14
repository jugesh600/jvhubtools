import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./utils/db.js";

import wordCounterRoutes from "./routes/wordCounterRoute.js";
import adminRoutes from "./routes/adminRoute.js";
import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.json());

app.use("/api/word-counter", wordCounterRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/user", userRoutes);
app.get("/", (req, res) => {
  res.send("JVToolsHub Backend Running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});