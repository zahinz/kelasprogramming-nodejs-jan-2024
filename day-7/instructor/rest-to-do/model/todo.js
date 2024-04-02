import { pool } from "../database/connection.js";

// create to-do table
// id, text, status, user_id, created_at

const query = `
CREATE TABLE IF NOT EXISTS to_dos (
  id SERIAL PRIMARY KEY,
  text VARCHAR(255) NOT NULL,
  status BOOLEAN DEFAULT FALSE,
  user_id INTEGER REFERENCES users(id),
  created_at TIMESTAMP DEFAULT NOW()
);
`;

async function createToDosTable() {
  try {
    await pool.query(query);
    console.log("To-dos table is created");
  } catch (error) {
    console.error(error);
  }
}

export default createToDosTable;
