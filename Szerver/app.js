import express from "express";
import * as db from "./db.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/fours", (req, res) => {
  const fours = db.getAllFours();
  res.status(200).json(fours);
});
app.get("/fours/:id", (req, res) => {
  const four = db.getFourById(req.params.id);
  if (four) {
    res.status(200).json(four);
  } else {
    res.status(404).json({ message: "Not Found" });
  }
});
app.post("/fours", (req, res) => {
  const { vals } = req.body;
  if (!vals) {
    return res.status(400).json({ message: "Missing data" });
  }
  if (vals.length < 4 || vals.length > 4) {
    return res.status(400).json({ message: "Invalid data" });
  }
  if (db.getAllFours().some((four) => four.vals === vals)) {
    return res.status(409).json({ message: "Already exists" });
  }
  let allValid = true;
  for (let i = 0; i < vals.length; i++) {
    const digit = parseInt(vals[i], 10); 
    console.log(digit);
    if (digit < 1 || digit > 4) {
      allValid = false;
      break; 
    }
  }
  if (!allValid) {
    return res.status(400).json({ message: "Invalid data" });
  }
  db.addFour(vals);
  res.status(201).json({ message: "Created" });
});
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;
