import { useEffect, useState } from "react";

export default function Dashboard() {
  const [venues, setVenues] = useState([]);
  const [members, setMembers] = useState([]);
  const [bookings, setBookings] = useState([]);
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    fetch("/api/venues").then(r => r.json()).then(d => setVenues(d.data));
    fetch("/api/members").then(r => r.json()).then(d => setMembers(d.data));
    fetch("/api/bookings").then(r => r.json()).then(d => setBookings(d.data));
    fetch("/api/transactions").then(r => r.json()).then(d => setTransactions(d.data));
  }, []);

  return (
    <div style={{ fontFamily: "Arial", padding: 20 }}>

      <h1>Supabase Sports Dashboard</h1>

      <h2>Venues</h2>
      <pre>{JSON.stringify(venues, null, 2)}</pre>

      <h2>Members</h2>
      <pre>{JSON.stringify(members, null, 2)}</pre>

      <h2>Bookings</h2>
      <pre>{JSON.stringify(bookings, null, 2)}</pre>

      <h2>Transactions</h2>
      <pre>{JSON.stringify(transactions, null, 2)}</pre>

    </div>
  );
}
