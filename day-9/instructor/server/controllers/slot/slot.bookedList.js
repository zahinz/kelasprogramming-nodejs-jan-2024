import { pool } from "../../database/index.js";

const listAllBookedSlot = `
SELECT id, date, time, customer_name, customer_phone, customer_email FROM slots
WHERE customer_name IS NOT NULL AND customer_phone IS NOT NULL AND customer_email IS NOT NULL;
`;

const listAllBookedSlots = async (req, res) => {
  try {
    const dbRes = await pool.query(listAllBookedSlot);
    const slots = dbRes.rows;
    const message = slots.length
      ? `Found ${slots.length} booked slot(s)`
      : "No booked slots found";
    return res.json({ message, data: slots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default listAllBookedSlots;
