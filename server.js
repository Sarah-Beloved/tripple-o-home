// ===== IMPORTS =====
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/auth"); // your auth routes

// ===== INITIALIZE APP =====
const app = express();
const PORT = process.env.PORT || 5000;

// ===== MIDDLEWARE =====
app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public")); // serve your frontend files

// ===== MONGODB CONNECTION =====
mongoose.connect("mongodb://127.0.0.1:27017/trippleohomes", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected ✅"))
.catch(err => console.error("MongoDB connection error:", err));

// ===== ROUTES =====
app.use("/api/auth", authRoutes);

// ===== TEST ROUTE =====
app.get("/", (req, res) => {
  res.send("Hello from your backend!");
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
