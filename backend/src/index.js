const express = require("express");
const cors = require("cors");
const path = require("path");

const convertRoutes = require("./routes/convert");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.use("/api", convertRoutes);
app.use("/download", express.static(path.join(__dirname, "../output")));

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
