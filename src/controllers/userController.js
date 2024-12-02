const createError = require("http-errors");
const User = require("../models/userModel");

const getUsers = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 5;
    
    const users = await User.find();
    res.status(200).send({
      message: "User were successfully return ",
      users: users,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
};
