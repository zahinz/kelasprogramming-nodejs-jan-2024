import nodemailer from "nodemailer";
import "dotenv/config";

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
});

const sendEmail = async (data) => {
  const emailData = {
    from: process.env.MAIL_FROM,
    to: data.to,
    subject: data.subject,
    html: data.html,
    text: data.text,
  };
  const info = await transport.sendMail(emailData, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  });
  return info;
};

export default sendEmail;
