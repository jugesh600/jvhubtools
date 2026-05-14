import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB Connected Successfully");
  })
  .catch((error) => {
    console.log("MongoDB Error:", error);
  });
