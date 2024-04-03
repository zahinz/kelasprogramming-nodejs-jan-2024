import { pool } from "../../database/connection.js";

const queryDeleteUserById = "DELETE FROM users WHERE id = $1";

async function deleteUser(req, res) {
  try {
    const id = req.params.id;
    await pool.query(queryDeleteUserById, [id]);

    //   check user id exists
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
}

export default deleteUser;
