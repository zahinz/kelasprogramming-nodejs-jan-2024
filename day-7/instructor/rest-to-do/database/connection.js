import pkg from "pg";
import createUsersTable from "../model/user.js";
import createToDosTable from "../model/todo.js";
const { Pool } = pkg;

export const pool = new Pool({
  host: "127.0.0.1",
  user: "zahin",
  password: "",
  database: "to-do-app-april-2024",
  //
  max: 20,
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000,
});

export async function testConnection() {
  // try catch block
  try {
    //   promise is pending
    const dbName = await pool.query("SELECT current_database()");
    const dbRes = await pool.query("SELECT NOW()");
    const time = dbRes.rows[0].now;
    const name = dbName.rows[0].current_database;
    //   promise is fullfilled
    console.log(`Connected to ${name} at ${time}`);

    // create database tables
    await createUsersTable();
    await createToDosTable();
  } catch (error) {
    //   promise is rejected
    console.error(error);
    console.error("Database connection failed");
  }
}

// PROMISE 101
// promise is variable for future value
// since promise is a variable for future value, we need to wait for the value to be available by using asyncronous function
// WAITING / PENUGGUAN
// state of promise - pending, fulfilled, rejected
// fullfilled - value is available / database query is successful
// rejected - value is not available / database query is failed / error
// try-catch block
// try - block of code pending and resolved
// catch - block of code rejected
