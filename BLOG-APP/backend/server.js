import exp from "express";
import { config } from "dotenv";
import mongoose from "mongoose";

import { userApp } from "./routes/UserAPI.js";
import { authorApp } from "./routes/AuthorAPI.js";
import { adminApp } from "./routes/AdminAPI.js";
import { commonApp } from "./routes/CommonAPI.js";

import cookieParser from "cookie-parser";
import cors from "cors";

//load env variables
config();

//create express app
const app = exp();

//middlewares
app.use(
  cors({
    origin: [process.env.FRONTEND_URL || "http://localhost:5173"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(exp.json());

//health route
app.get("/", (req, res) => {
  res.send("Backend Server Running");
});

//routes
app.use("/user-api", userApp);
app.use("/author-api", authorApp);
app.use("/admin-api", adminApp);
app.use("/auth", commonApp);

const connectDB = async () => {
  try {
    const maskedURI = process.env.DB_URL ? process.env.DB_URL.replace(/:([^@]+)@/, ":****@") : "undefined";
    console.log("Connecting to database with URI:", maskedURI);
    await mongoose.connect(process.env.DB_URL);

    console.log("MongoDB Connected Successfully");

    //start server only after db connection
    const port = process.env.PORT || 5000;

    app.listen(port, () => {
      console.log(`Server listening on port ${port}`);
    });
  } catch (err) {
    console.log("Database connection error:", err.message);
  }
};

//connect database
connectDB();

//invalid path middleware
app.use((req, res) => {
  res.status(404).json({
    message: `Path ${req.url} is invalid`,
  });
});

//global error handling middleware
app.use((err, req, res, next) => {
  console.log("Error:", err);

  //validation errors
  if (err.name === "ValidationError") {
    return res.status(400).json({
      message: "Validation Error",
      error: err.message,
    });
  }

  //cast errors
  if (err.name === "CastError") {
    return res.status(400).json({
      message: "Cast Error",
      error: err.message,
    });
  }

  //duplicate key errors
  const errCode =
    err.code ?? err.cause?.code ?? err.errorResponse?.code;

  const keyValue =
    err.keyValue ??
    err.cause?.keyValue ??
    err.errorResponse?.keyValue;

  if (errCode === 11000) {
    const field = Object.keys(keyValue)[0];
    const value = keyValue[field];

    return res.status(409).json({
      message: "Duplicate Field Error",
      error: `${field} "${value}" already exists`,
    });
  }

  //server errors
  res.status(500).json({
    message: "Server Error",
    error: "Something went wrong",
  });
});