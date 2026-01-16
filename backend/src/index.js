const express = require("express");
const cors = require("cors");
const path = require("path");

const convertRoutes = require("./routes/convert");

const app = express();

/**
 * =========================
 * CORS CONFIGURATION
 * =========================
 * For MVP: allow all origins
 * (We will restrict this later)
 */
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST"],
  })
);

/**
 * =========================
 * MIDDLEWARES
 * =========================
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * =========================
 * API ROUTES
 * =========================
 */
app.use("/api", convertRoutes);

/**
 * =========================
 * HEALTH CHECK
 * =========================
 */
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "ok",
    uptime: process.uptime(),
    timestamp: new Date(),
  });
});

/**
 * =========================
 * GLOBAL ERROR HANDLER
 * =========================
 */
app.use((err, req, res, next) => {
  console.error("❌ Server Error:", err);

  res.status(500).json({
    success: false,
    message: "Internal server error",
  });
});

/**
 * =========================
 * SERVER START
 * =========================
 */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`🚀 Backend server running on port ${PORT}`);
});
