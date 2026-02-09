import express from "express";

const router = express.Router();

// ⚠️ TEMP shared data (later MongoDB)
let userData = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 }
];

// CREATE USER
router.post("/api/user", (req, res) => {
  const { name, age } = req.body;

  const newUser = {
    id: userData.length + 1,
    name,
    age
  };

  userData.push(newUser);
  res.redirect("/user");
});

// UPDATE USER
router.put("/api/user/:id", (req, res) => {
  const { id } = req.params;
  const { name, age } = req.body;

  const userIdx = userData.findIndex(u => u.id == id);

  if (userIdx === -1) {
    return res.send("User not found");
  }

  userData[userIdx].name = name;
  userData[userIdx].age = age;

  res.redirect("/user");
});

// DELETE USER
router.delete("/api/user/:id", (req, res) => {
  const { id } = req.params;

  const userIdx = userData.findIndex(u => u.id == id);

  if (userIdx === -1) {
    return res.send("User not found");
  }

  userData.splice(userIdx, 1);
  res.redirect("/user");
});

export default router;
