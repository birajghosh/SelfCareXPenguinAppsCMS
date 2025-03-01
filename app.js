const express = require("express");
const cors = require("cors");
const path = require("path");
const cookieParser = require("cookie-parser");
const RateLimit = require("express-rate-limit");
const logger = require("morgan");
const bodyParser = require("body-parser");

const postsRouter = require("./routes/mobile/posts.router");
const { verifyUserTokenMiddleware } = require("./middlewares/verifyUserToken.middleware");

const app = express();

// Rate limiting configuration
const limiter = RateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 100, // Limit each IP to 100 requests per windowMs
  delayMs: 0, // No delay
});

// CORS configuration
const corsOptions = {
  origin: "*", // Allow all origins
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
  credentials: true,
};

// Middleware setup
app.use(cors(corsOptions));
app.use(limiter);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Logger setup
app.use(logger("dev"));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

// Mobile Routes
app.use("/api/posts", postsRouter);

// Admin Routes

// Body parser for form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// CORS headers
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type, Authorization"
  );
  next();
});

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
  console.log("404 Handler triggered for:", req.url);
  return res.status(404).json({
    success: false,
    response: "No such path exists",
  });
});

// Error handling middleware
app.use(function (err, req, res, next) {
  console.error("Error Message:", err.message);
  console.error("Error Stack:", err.stack);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});

// Export the app
module.exports = app;
