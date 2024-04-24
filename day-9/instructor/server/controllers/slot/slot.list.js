import { pool } from "../../database/index.js";

const listAllQuery = `
SELECT id, date, time FROM slots ORDER BY date, time ASC;
`;

// PAGINATION

const listAllSlots = async (req, res) => {
  try {
    //    pagination details in query params
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const offset = (page - 1) * limit;

    const dbRes = await pool.query(listAllQuery);
    const slots = dbRes.rows;
    const message = slots.length
      ? `Found ${slots.length} slot(s)`
      : "No slots found";
    return res.json({ message, data: slots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default listAllSlots;
