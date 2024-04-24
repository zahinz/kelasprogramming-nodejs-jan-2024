import bcrypt from "bcrypt";
import { pool } from "../../database/index.js";
import { validateEmail } from "../../utils/helper.js";
import sendEmail from "../../service/email.js";

const insertNewUser = `
INSERT INTO users (password, email)
VALUES ($1, $2)
`;

const checkEmailQuery = `
SELECT * FROM users
WHERE email = $1
`;

const register = async (req, res) => {
  try {
    const password = req.body.password;
    const email = req.body.email;

    //   validate the request body is not empty
    if (!password || !email) {
      return res.status(400).json({
        message: "password and email is required",
      });
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    //   check if email already exists
    const dbResEmail = await pool.query(checkEmailQuery, [email]);
    if (dbResEmail.rows.length > 0) {
      return res.status(400).json({
        message: "Email already exists",
      });
    }

    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    //   pool.query(sqlSyntax, [dynamicValue])
    const dbRes = await pool.query(insertNewUser, [hashedPassword, email]);
    await sendEmail({
      to: email,
      subject: "User registered",
      html: "<p>Thank you for registering. This is your varification code - 12345jkswk</p>",
      text: "You have successfully registered",
    });
    res.status(201).json({
      message: "User is created",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default register;
