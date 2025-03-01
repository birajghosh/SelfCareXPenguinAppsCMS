const showPosts = async (req, res) => {
  try {
    console.log("Test");
    res.status(200).json({ message: "Showing Posts" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Error While showing Posts" });
  }
};

module.exports = {
    showPosts
};
