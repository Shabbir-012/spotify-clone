import express from "express";
import dotenv from "dotenv";

import { connectDB } from "./lib/db.js";

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"
import adminRoutes from "./routes/admin.route.js"
import albumRoutes from "./routes/album.route.js"
import statsRoutes from "./routes/stats.route.js"
import songRoutes from "./routes/song.route.js"


dotenv.config();

const app = express();
const PORT = process.env.PORT;

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/admin",adminRoutes);
app.use("/api/albums",albumRoutes);
app.use("/api/stats",statsRoutes);
app.use("/api/songs", songRoutes);

app.listen(PORT, () => {
  console.log(`App is running ${PORT}`);
  connectDB();
});
