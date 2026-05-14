import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import sendEmail from "../utils/sendEmail.js";


// REGISTER USER + RESEND OTP LOGIC
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const otp = Math.floor(
      100000 + Math.random() * 900000
    ).toString();

    // Check existing user
    const existingUser = await User.findOne({ email });

    // If already verified user exists
    if (existingUser && existingUser.isVerified) {
      return res.status(400).json({
        message: "User already exists. Please login."
      });
    }

    // If user exists but not verified → resend OTP
    if (existingUser && !existingUser.isVerified) {
      existingUser.otp = otp;
      existingUser.otpExpire =
        Date.now() + 10 * 60 * 1000;

      await existingUser.save();

      await sendEmail(email, otp);

      return res.json({
        message: "OTP resent successfully"
      });
    }

    // New user register
    const hashedPassword =
      await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword,
      otp,
      otpExpire: Date.now() + 10 * 60 * 1000,
      isVerified: false
    });

    await sendEmail(email, otp);

    res.json({
      message: "OTP sent successfully"
    });

  } catch (error) {
    console.log("REGISTER ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};


// VERIFY OTP
export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    if (
      user.otp !== otp ||
      user.otpExpire < Date.now()
    ) {
      return res.status(400).json({
        message: "Invalid or Expired OTP"
      });
    }

    user.isVerified = true;
    user.otp = null;
    user.otpExpire = null;

    await user.save();

    res.json({
      message: "Account verified successfully"
    });

  } catch (error) {
    console.log("VERIFY OTP ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};


// LOGIN USER
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found"
      });
    }

    // Block login until OTP verified
    if (!user.isVerified) {
      return res.status(400).json({
        message: "Please verify OTP first"
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(400).json({
        message: "Invalid Password"
      });
    }

    const token = jwt.sign(
      { id: user._id },
      "secretkey",
      {
        expiresIn: "7d"
      }
    );

    res.json({
      message: "Login Successful",
      token
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    res.status(500).json({
      message: "Server Error"
    });
  }
};
export const logoutUser = async (req, res) => {
  try {
    res.json({
      message: "Logout Successful"
    });
  } catch (error) {
    res.status(500).json({
      message: "Server Error"
    });
  }
};