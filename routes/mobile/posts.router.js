const express = require("express");
const router = express.Router();
const sequelize = require("../../config/database");

const { showPosts } = require("../../controllers/mobile/posts.controller");

router.get("/test", showPosts);

module.exports = router;
