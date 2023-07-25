import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

// @desc Auth(login) user/set token
// route POST /api/users/auth
// @access public
const authUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Auth user" });
});

// @desc Register new user
// route POST /api/users
// @access public
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(404);
    throw new Error("User already exists");
  }

  const user = await User.create({
    name,
    email,
    password,
  });

  if (user) {
    res.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
    });
  } else {
    res.status(400);
    throw new Error("Invalid user data");
  }
});

// @desc Logout user
// route POST /api/users/logout
// @access public
const logoutUser = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Logout user" });
});

// @desc Get user progile
// route GET /api/users/profile
// @access private
const getUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "User profile" });
});

// @desc Update user progile
// route PUT /api/users/profile
// @access private
const updateUserProfile = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Update User profile" });
});

export {
  authUser,
  registerUser,
  logoutUser,
  getUserProfile,
  updateUserProfile,
};
