import express from "express";
import pkg from "pg";

const { Pool } = pkg;
const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

app.get("/", (req, res) => {
  res.send("Coding Assignment API Running");
});

app.get("/venues", async (req, res) => {
  const result = await pool.query("SELECT * FROM venues");
  res.json(result.rows);
});

app.get("/bookings", async (req, res) => {
  const query = `
    SELECT b.booking_id, v.name AS venue, m.name AS member,
           b.amount, b.status
    FROM bookings b
    JOIN venues v ON b.venue_id = v.venue_id
    JOIN members m ON b.member_id = m.member_id
  `;
  const result = await pool.query(query);
  res.json(result.rows);
});

app.get("/revenue", async (req, res) => {
  const result = await pool.query(
    "SELECT SUM(amount) AS revenue FROM transactions WHERE status='Success'"
  );
  res.json(result.rows[0]);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
