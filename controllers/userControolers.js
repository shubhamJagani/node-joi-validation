const User = require("../models/userModels");
const bcrypt = require("bcryptjs");

exports.getAllUser = async (req, res, next) => {
  try {
    const user = await User.find();

    return res.status(200).json({
      success: true,
      data: user,
      message: "users get successfully..!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addUser = async (req, res, next) => {
  try {
    const { userName, gender, birthDate, email } = req.body;

    const hashPW = bcrypt.hash(req.body.password, 12);

    const newUser = {
      userName,
      gender,
      birthDate,
      email,
      password: hashPW,
    };

    const user = await User.create(newUser);

    return res.status(200).json({
      success: true,
      data: user,
      message: "users add successfully..!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getUserbyID = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      const error = new Error("user not found..!");
      error.statusCode = 404;
      throw error;
    }

    return res.status(200).json({
      success: true,
      data: user,
      message: "user get successfully..!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updateUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      const error = new Error("user not found..!");
      error.statusCode = 404;
      throw error;
    }

    user.userName = req.body.userName;
    user.gender = req.body.gender;
    user.birthDate = req.body.birthDate;
    user.email = req.body.email;

    const updatedUser = await user.save();

    return res.status(200).json({
      success: true,
      data: updatedUser,
      message: "user update successfully..!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    const { id } = req.params;

    const user = await User.findById(id);

    if (!user) {
      const error = new Error("user not found..!");
      error.statusCode = 404;
      throw error;
    }

    const deleteUser = await user.remove();

    return res.status(200).json({
      success: true,
      data: deleteUser,
      message: "user update successfully..!",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};
