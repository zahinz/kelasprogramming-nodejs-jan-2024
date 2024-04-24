import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { pool } from "../../database/index.js";
import { validateEmail } from "../../utils/helper.js";

const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    // check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({
        message: "Bad request",
      });
    }

    const isValidEmail = validateEmail(email);
    if (!isValidEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    // check if email exists in the database
    const query = `
            SELECT * FROM users
            WHERE email = $1
        `;
    const dbRes = await pool.query(query, [email]);
    const user = dbRes.rows[0];

    //   if user is not found return 404
    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    //   check if password is correct using bcrypt
    const isValidPassword = bcrypt.compareSync(password, user.password);

    //   if password is not correct return 401
    if (!isValidPassword) {
      return res.status(401).json({
        message: "Unauthorized",
      });
    }

    //   create token using jwt
    const data = {
      id: user.id,
      email: user.email,
    };
    const secretKey = process.env.JWT_SECRET_KEY;

    const token = jwt.sign(data, secretKey);

    res.status(200).json({
      message: "Token created",
      token: token,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default login;
