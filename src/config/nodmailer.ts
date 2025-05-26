import nodemailer from "nodemailer";

const email = process.env.EMAIL;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASS,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};
