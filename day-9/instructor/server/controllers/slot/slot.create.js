import { pool } from "../../database/index.js";

const createQuery = `
  INSERT INTO slots (date, time)
  VALUES ($1, $2)
  RETURNING *;
`;

const createNewSlot = async (req, res) => {
  try {
    const date = req.body.date;
    const time = req.body.time;

    //   validation for date and time
    if (!date || !time) {
      return res.status(400).json({ message: "Date and time are required" });
    }

    const dbRes = await pool.query(createQuery, [date, time]);
    const slot = dbRes.rows[0];
    return res.json({ message: "New slot created", data: slot });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default createNewSlot;
