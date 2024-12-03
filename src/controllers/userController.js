const createError = require("http-errors");
const User = require("../models/userModel");

const getUsers = async (req, res, next) => {
  try {
    const search = req.query.search || "";
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 2;
    const skip = (page - 1) * limit;

    const users = await User.find()
      .skip(skip)
      .limit(limit)
      .sort({ createdAt: -1 });

    const totalUsers = await User.countDocuments();
    const totalPages = Math.ceil(totalUsers / limit);

    res.status(200).send({
      message: "Users were successfully returned",
      users: users,
      pagination: {
        page,
        limit,
        totalPages,
        totalUsers,
      },
    });
  } catch (error) {
    next(error);
  }
};

// GET SINGLE USER
const getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return next(createError(404, "User not found"));
    }

    res.status(200).send({
      message: "User was successfully returned",
      user: user,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getUsers,
  getUser,
};
