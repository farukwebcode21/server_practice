const { Schema, model, set } = require("mongoose");
const bcrypt = require("bcrypt");
const { defaultImagePath } = require("../secret");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "User name is required"],
      trim: true,
      minlength: [3, "The minimum length 3 characters"],
      maxlength: [50, "The maximum length 50 characters"],
    },
    email: {
      type: String,
      required: ["User email is required"],
      trim: true,
      unique: true,
      lowercase: true,
      validate: {
        validator: (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
        message: "{VALUE} is not a valid email",
      },
    },
    age: {
      type: Number,
      required: [true, "User Age is required"],
      min: 18,
      max: 99,
    },
    password: {
      type: String,
      required: true,
      minlength: [8, "The minimum length 8 characters"],
      set: (v) => bcrypt.hashSync(v, bcrypt.genSaltSync(10)),
    },
    image: {
      type: String,
      default: defaultImagePath,
    },
    address: {
      type: String,
      required: [true, "User address is required"],
    },
    phone: {
      type: String,
      required: [true, "User phone is required"],
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isBanned: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = model("user", userSchema);
module.exports = User;
