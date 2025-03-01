const tokenOps = require("../utils/tokenOps");

const verifyUserTokenMiddleware = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res
      .status(400)
      .json({ success: false, error: "Authorization token required" });
  }

  const verificationResult = tokenOps.verifyToken(token);

  if (!verificationResult.success) {
    return res.status(401).json({
      success: false,
      error: verificationResult.error,
    });
  }

  // Attach the userId to the request object for future use
  req.userId = String(verificationResult.userId);

  // Proceed to the next middleware/route handler
  next();
};

module.exports = { verifyUserTokenMiddleware };
