export default function Dashboard() {
  return (
    <div style={{ 
      fontFamily: "Arial, sans-serif", 
      padding: "40px", 
      background: "#f5f5f5", 
      minHeight: "100vh" 
    }}>
      
      <h1 style={{ color: "#333", marginBottom: "10px" }}>
        Sports Booking Dashboard
      </h1>

      <p style={{ marginBottom: "30px" }}>
        Welcome! Your backend API is deployed and running successfully.
      </p>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "20px"
      }}>

        <div style={cardStyle}>
          <h3>Total Revenue</h3>
          <h2>₹2,750.00</h2>
        </div>

        <div style={cardStyle}>
          <h3>Bookings</h3>
          <h2>8</h2>
        </div>

        <div style={cardStyle}>
          <h3>Active Members</h3>
          <h2>5</h2>
        </div>

      </div>

      <br/>

      <a 
        href="/api" 
        style={{
          padding: "10px 25px",
          background: "#000",
          color: "#fff",
          borderRadius: "5px",
          textDecoration: "none",
          marginTop: "40px",
          display: "inline-block"
        }}>
        View API JSON
      </a>

    </div>
  );
}

const cardStyle = {
  background: "#fff",
  padding: "20px",
  borderRadius: "8px",
  textAlign: "center",
  boxShadow: "0px 0px 6px rgba(0,0,0,0.1)"
};
