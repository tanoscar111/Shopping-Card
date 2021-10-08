import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";
import User from "../models/userModels.js";
import {} from "dotenv/config";
export const signIn = async (req, res) => {
  const { email, password } = req.body;

  try {
    const login = await User.findOne({ email });
    console.log(login);
    if (!login)
      return res
        .status(404)
        .json({ success: false, message: "User không tồn tại" });
    const isPassword = await bcrypt.compare(password, login.password);
    if (!isPassword)
      return res
        .status(404)
        .json({ success: false, message: "Đăng nhập thất bại" });
    const token = jwt.sign(
      { email: login.email, id: login._id },
      "mySecretKey",
      {
        expiresIn: "2h",
      }
    );

    res.status(200).json({
      result: login,
      token,
      success: true,
      message: "Đăng nhập thành công",
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Đăng Nhập Thất bại" });
  }
};
export const signUp = async (req, res) => {
  const { email, password, confimPassword, firstName, lastName } = req.body;
  try {
    const Register = await User.findOne({ email });
    if (Register)
      return res
        .status(404)
        .json({ success: false, message: "User đã tồn tại" });
    if (password !== confimPassword)
      res
        .status(404)
        .json({ success: false, message: "mật khẩu không trùng nhau" });
    const hashedPassword = await bcrypt.hash(password, 12);

    const result = await User.create({
      useName: `${firstName} ${lastName}`,
      email: email,
      password: hashedPassword,
    });

    const token = jwt.sign(
      { email: result.email, id: result._id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "300",
      }
    );
    res.status(200).json({
      result: result,
      token,
      success: true,
      message: "Đăng kí thành công",
    });
  } catch (error) {
    res.status(500).json({ message: "Đăng Kí Thất bại" });
  }
};

export const getUser = (req, res) => {
  res.json({ status: "Thành công" });
};
