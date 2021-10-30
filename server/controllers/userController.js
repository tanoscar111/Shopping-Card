const ErrorHander = require("../util/errorhandel");
const catchAsynErrors = require("../middleware/catchAsynErrors");
const User = require("../models/userModels");
const sendToken = require("../util/jwtToken");

//register
exports.registerUser = catchAsynErrors(async (req, res, next) => {
  const { name, email, password } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    avatar: {
      public_id: " this is sample id",
      url: "profileUrl",
    },
  });
  sendToken(user, 201, res);
});
exports.loginUser = catchAsynErrors(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new ErrorHander("Please Enter Email & Password", 400));
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  const isPasswordMatched = await user.comparePassword(password);

  if (!isPasswordMatched) {
    return next(new ErrorHander("Invalid email or password", 401));
  }

  sendToken(user, 200, res);
});
// Logout User
exports.logout = catchAsynErrors(async (req, res, next) => {
  res.cookie("token", null, {
    expires: new Date(Date.now()),
    httpOnly: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged Out",
  });
});
