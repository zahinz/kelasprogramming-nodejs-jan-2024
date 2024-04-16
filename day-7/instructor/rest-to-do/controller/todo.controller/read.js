// list all todos which only belongs to the user

import { pool } from "../../database/connection.js";

const listAllTodos = async (req, res) => {
  // get user id from req object which is set in isAuth middleware
  const userId = req.userId;
  try {
    const query = `
            SELECT * FROM to_dos
            WHERE user_id = $1
        `;

    const dbRes = await pool.query(query, [userId]);
    // console.log(dbRes);
    const data = dbRes.rows;
    res.status(200).json({
      message: `${data.length} to-dos found`,
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default listAllTodos;
