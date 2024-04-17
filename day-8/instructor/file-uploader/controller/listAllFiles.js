import { pool } from "../database/index.js";

async function listAllFiles(req, res) {
  try {
    const query = `SELECT * FROM files`;
    const dbRes = await pool.query(query);
    //   parse the path to include the full URL
    const data = dbRes.rows.map((file) => {
      return {
        ...file,
        path: `http://localhost:8585/${file.path}`,
      };
    });

    res.status(200).json({
      message: `${data.length} files found`,
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Internal server error",
    });
  }
}

export default listAllFiles;
