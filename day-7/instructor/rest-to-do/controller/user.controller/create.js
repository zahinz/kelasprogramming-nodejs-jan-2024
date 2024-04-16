import { pool } from "../../database/connection.js";
import bcrypt from "bcrypt";

// $ is a placeholder for a dynamic value
const query = `
INSERT INTO users (username, password, email, is_admin)
VALUES ($1, $2, $3, $4)
`;

async function createUser(req, res) {
  try {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;
    const isAdmin = req.body.isAdmin;

    //   validate the request body is not empty
    if (!username || !password || !email) {
      return res.status(400).json({
        message: "username, password, email is required",
      });
    }

    //   validate email string using regex
    const emailRegex = /\S+@\S+\.\S+/;
    const isValidEmail = emailRegex.test(email);
    if (!isValidEmail) {
      return res.status(400).json({
        message: "Invalid email",
      });
    }

    //   check if the user already exists
    //   PLEASE EXPLORE THE SQL SYNTAX
    // hash the password
    // For legacy systems using bcrypt, use a work factor of 10 or more and with a password limit of 72 bytes.
    // https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = bcrypt.hashSync(password, salt);

    //   pool.query(sqlSyntax, [dynamicValue])
    const dbRes = await pool.query(query, [
      username,
      hashedPassword,
      email,
      isAdmin,
    ]);
    console.log(dbRes);
    res.status(201).json({
      message: "User is created",
    });
  } catch (error) {
    console.error(error);
    //   rewrite the error message
    //   is not a best practice to expose the error message from database to the client
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export default createUser;
