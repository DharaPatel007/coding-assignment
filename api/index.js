export default function handler(req, res) {
  res.status(200).json({
    message: "Backend API working",
    status: "OK"
  })
}
