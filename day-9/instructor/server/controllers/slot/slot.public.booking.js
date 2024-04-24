import { pool } from "../../database/index.js";

const checkSlotsBooked = `
  SELECT * FROM slots
  WHERE id = $1 AND customer_name IS NOT NULL AND customer_phone IS NOT NULL AND customer_email IS NOT NULL;
`;

const updateSlot = `
  UPDATE slots
  SET customer_name = $1, customer_phone = $2, customer_email = $3
  WHERE id = $4
  RETURNING id, date, time, customer_name, customer_phone, customer_email;
`;

const bookASlotForPublic = async (req, res) => {
  try {
    const customerName = req.body.customer_name;
    const customerPhone = req.body.customer_phone;
    const customerEmail = req.body.customer_email;
    const slotId = req.params.id;

    const checkRes = await pool.query(checkSlotsBooked, [slotId]);
    if (checkRes.rows.length) {
      return res.status(400).json({ message: "Slot already booked" });
    }

    const slots = await pool.query(updateSlot, [
      customerName,
      customerPhone,
      customerEmail,
      slotId,
    ]);
    return res.json({ data: slots.rows });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default bookASlotForPublic;
