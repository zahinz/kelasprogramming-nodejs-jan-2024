import { pool } from "../../database/index.js";

const createQuery = `
  INSERT INTO slots (date, time)
  VALUES ($1, $2)
  RETURNING *;
`;

const checkDateTimeExists = `
  SELECT * FROM slots
  WHERE date = $1 AND time = $2;
`;

const createNewSlot = async (req, res) => {
  try {
    const date = req.body.date;
    const time = req.body.time;

    //   validation for date and time
    if (!date || !time) {
      return res.status(400).json({ message: "Date and time are required" });
    }

    //   check if slot already exists
    const checkRes = await pool.query(checkDateTimeExists, [date, time]);
    if (checkRes.rows.length) {
      return res.status(400).json({ message: "Slot already exists" });
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
