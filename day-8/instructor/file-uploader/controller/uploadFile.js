import { pool } from "../database/index.js";

async function uploadFile(req, res) {
  try {
    // req.file exists because of the upload.single middleware by multer
    const file = req.file;
    // insert file details into files table
    const query = `INSERT INTO files (fieldname, originalname, encoding, mimetype, destination, filename, path, size) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`;
    const dbRes = await pool.query(query, [
      file.fieldname,
      file.originalname,
      file.encoding,
      file.mimetype,
      file.destination,
      file.filename,
      file.path,
      file.size,
    ]);
    const data = dbRes.rows[0];
    res.status(200).json({
      message: "File uploaded successfully",
      file: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export default uploadFile;
