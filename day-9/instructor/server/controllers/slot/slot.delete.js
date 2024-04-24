import { pool } from "../../database/index.js";

const deleteQuery = `
  DELETE FROM
    slots
  WHERE
    id = $1
`;

const deleteSlot = async (req, res) => {
  try {
    const { id } = req.params;
    const dbRes = await pool.query(deleteQuery, [id]);
    const message = dbRes.rowCount
      ? `Slot with id ${id} deleted`
      : `Slot with id ${id} not found`;
    return res.json({ message });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default deleteSlot;
