import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

const sendEmail = async (email, otp) => {
  console.log("EMAIL:", email);
  console.log("OTP:", otp);
  console.log("EMAIL_USER:", process.env.EMAIL_USER);
  console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,

      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "OTP Verification Code",
      html: `
        <h2>Your OTP is: ${otp}</h2>
        <p>This OTP is valid for 10 minutes.</p>
      `,
    });

    console.log("OTP Email Sent Successfully ✅");

  } catch (error) {
    console.log("EMAIL ERROR ❌:", error.message);
  }
};

export default sendEmail;