import { pool } from "../database/connection.js";

// create users table
// id, username, password, email, is_admin, created_at

const query = `
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  username VARCHAR(50) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  is_admin BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);
`;

async function createUsersTable() {
  try {
    await pool.query(query);
    console.log("Users table is created");
  } catch (error) {
    console.error(error);
  }
}

export default createUsersTable;
