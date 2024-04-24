import { pool } from "../../database/index.js";

// available slots determined by the absence of customer_name, customer_phone, and customer_email
const listAllAvailableSlot = `
SELECT id, date, time FROM slots
WHERE customer_name IS NULL AND customer_phone IS NULL AND customer_email IS NULL;
`;

const listAllBookedSlot = `
SELECT id, date, time FROM slots
WHERE customer_name IS NOT NULL AND customer_phone IS NOT NULL AND customer_email IS NOT NULL;
`;

const listAllSlotsForPublic = async (req, res) => {
  try {
    const availableSlots = await pool.query(listAllAvailableSlot);
    const bookedSlots = await pool.query(listAllBookedSlot);
    const slots = {
      available: availableSlots.rows,
      booked: bookedSlots.rows,
    };
    const message = `Available slots: ${availableSlots.rowCount}, Booked slots: ${bookedSlots.rowCount}`;
    return res.json({ message, data: slots });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default listAllSlotsForPublic;
