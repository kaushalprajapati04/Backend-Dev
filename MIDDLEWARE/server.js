// import express from "express";

// const app = express();

// let mid1 = (req, res, next) => {
//   console.log("Middleware 1");
//   next();
// }
// let mid2 = (req, res, next) => {
//   console.log("Middleware 2");
//   next();
// }

// app.use(mid1)
// app.use(mid2)

// app.get("/", (req, res) => {
//     console.log("req.url:", req.url);
//   res.send("Server is running");
// })

// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// })



import express from "express";
import fs from "fs";


const app = express();

app.use(express.json());


let mid1 = (req, res, next) => {
  console.log("Middleware 1");
  next();
};

let mid2 = (req, res, next) => {
  console.log("Middleware 2");
  next();
};

app.use(mid1);
app.use(mid2);


const validateUser = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "username and password are required",
    });
  }

  
  if (username.length < 3) {
    return res.status(400).json({
      message: "username must be at least 3 characters",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "password must be at least 6 characters",
    });
  }
  next();
};


app.get("/", (req, res) => {
  console.log("req.url:", req.url);
  res.send("Server is running");
});

app.post("/user", validateUser, (req, res) => {
  const { username } = req.body;

  res.status(200).json({
    message: "User created successfully",
    user: username,
  });
});


app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
