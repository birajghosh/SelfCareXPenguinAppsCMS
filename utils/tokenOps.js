// Import necessary modules
const jwt = require("jsonwebtoken");
const config = require("../config/config");

// Generate JWT token with expiration time set to one month (30 days)
const generateToken = (userId) => {
  const token = jwt.sign(
    { userId: userId },
    config.JWT_SIGNING_KEY
    // { expiresIn: "30d" } // Set expiration time to 30 days
  );
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, config.JWT_SIGNING_KEY);
    return {
      success: true,
      userId: decoded.userId,
    };
  } catch (error) {
    console.error("Token verification failed:", error.message);

    if (error.name === "TokenExpiredError") {
      return { success: false, error: "Token expired" };
    }
    return { success: false, error: "Invalid token" };
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
