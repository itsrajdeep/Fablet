import express from "express";
import cors from "cors";
import indexRouter from "./routes/index.mjs";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to Database"))
  .catch((err) => console.log(`Error: ${err}`));

const app = express();
const PORT = process.env.PORT || 5000;

// Allow requests from the frontend (comma-separated origins in FRONTEND_URL)
const allowedOrigins = process.env.FRONTEND_URL
  ? process.env.FRONTEND_URL.split(",").map((o) => o.trim())
  : ["http://localhost:3000"];

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (mobile apps, curl, Postman)
      if (!origin) return callback(null, true);
      // Allow if exact match or if it's a Vercel preview URL for this project
      if (
        allowedOrigins.includes(origin) ||
        /^https:\/\/fablet(-[^.]*)?\.vercel\.app$/.test(origin)
      ) {
        return callback(null, true);
      }
      return callback(new Error("CORS: origin not allowed"));
    },
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/", indexRouter);

app.get("/", (req, res) => {
  res.status(200).send("Fablet API is running");
});

app.get("/health", (req, res) => {
  const dbState = mongoose.connection.readyState;
  const dbStatus = ["disconnected", "connected", "connecting", "disconnecting"][dbState] || "unknown";
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    db: dbStatus,
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`),
);
