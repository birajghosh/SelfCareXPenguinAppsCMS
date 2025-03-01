const { QueryTypes } = require("sequelize");
const sequelize = require("../../config/database");

const showPosts = async (req, res) => {
  try {
    const posts = await sequelize.query("SELECT * FROM posts", {
      type: QueryTypes.SELECT,
    });

    res.status(200).json({ success: true, data: posts });
  } catch (err) {
    console.log(err);
    res
      .status(500)
      .json({ success: false, message: "Error While showing Posts" });
  }
};

module.exports = {
  showPosts,
};
