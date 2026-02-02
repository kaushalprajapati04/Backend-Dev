// const express = require("express");
// // const data = require("C:\Users\hp\OneDrive\Desktop\GLA-MERN-3Y-3H\EXPRESSPROJECTS\data.js");
// const data = require("./data");
// console.log("Loaded data:", data);

// const app = express();
// const port = 3001;

// let userInfo = {
//     username: "admin",
//     password: "password123"
// }

// //console.log("User Info:", userInfo);

// // ---------- to get any value and save it in a variable ----------

// // let name = userInfo.username;
// // let password = userInfo.password;

// // DESTRUCTURING
// const {username, password: pwd} = userInfo;

// // let arr = [1,2,3];
// // let num1 = arr[0];
// // let num2 = arr[1];    -----old way
// // let num3 = arr[2];

// // const [num1, num2, num3] = arr;    ------ destructuring way(new way)

// // async programming
// // eventloop
// // streams
// // server

// app.get("/", (req, res) => {
//   res.send("Hello");
// });

// app.get("/user", (req, res) => {
//   res.send("User route");
// });

// // app.get("/userDetails", (req, res) => {
// //   const modifiedData = data.map(person => {
// //     let prefix = "";

// //     if (person.gender === "Male") {
// //       prefix = "Mr ";
// //     } else if (person.gender === "Female") {
// //       prefix = "Mrs. ";
// //     }

// //     return {
// //       ...person,
// //       name: prefix + person.name
// //     };
// //   });

// //   res.json(modifiedData);
// // });

// app.get("/user/:id", (req, res) => {
//     let modifiedData = data.map((person) => {

//       if (person.gender === "Male") {
//         prefix = "Mr. "+ person.name;
//       } else if (person.gender === "Female") {
//         prefix = "Mrs. "+ person.name;
//       }
//     });

//     // const user = modifiedData.find(person => person.id === parseInt(req.params.id));
//     // if (user) {
//     //   res.json(user);
//     // } else {
//     //   res.status(404).json({ error: "User not found" });
//     // }

//     console.log(modifiedData);
//     res.json(modifiedData);
// });

// app.get("/userDetails/:id", (req, res) => {
//     const id = parseInt(req.params.id);  
//     let user = data.find(person => person.id === id);

//     res.json(user);
// });

// app.listen(port, () => {
//   console.log("Server is running");
// });


import express from "express";
import fs from "fs";

import logfun from "./middleware.js";

const app = express();

app.use(express.json());

// let logfun = (req, res, next) => {
//   let log = `timestamp: ${new Date().toString()} url ${req.url} method: ${req.method}\n`

//   fs.appendFileSync("./logs.txt", log + "\n");
//   console.log(log);
//   next();
// }


// global middleware
app.use(logfun);

let data = [
  {
    id: 1,
    username: "qwert",
    password: "qwer123",
  },
  {
    id: 2,
    username: "ramesh",
    password: "1234",
  },
];

app.get("/", (req, res) => {
  res.status(200).json({
    message: "home route",
  });
});

app.get("/user", (req, res) => {
  res.status(200).json({
    message: "all user",
    data,
  });
});

app.post("/user", (req, res) => {
  console.log(req.body);

  const { username, password } = req.body;
  //validation
  if (!username || !password) {
    return res.status(400).json({
      message: "username and password require",
    });
  }

  if (password.length < 6) {
    return res.status(400).json({
      message: "password strength is weak",
    });
  }

  let newuser = {
    id: data.length + 1,
    ...req.body,
  };

  data.push(newuser);

  res.status(200).json({
    message: "user created",
  });
});

app.put("/user/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let {username} = req.body;
    // find user by id
  let userIdx = data.findIndex((ele) => ele.id == id);

  if (userIdx == -1) {
    res.status(400).json({
      message: "user not found",
    });
  }

  // create new updated user
  let updatedUser = { ...data[userIdx], username: username };
  // updated the data array
  data[userIdx] = updatedUser;

  res.status(200).json({
    message: "user updated",
  });
});

//  ----------------------------------------------- delete user using splice-------------------------------------
// app.delete("/user/:id", (req, res) => {
//   const id = parseInt(req.params.id);
//   const userIdx = data.findIndex((ele) => ele.id == id);
//   const userdeleted = data[userIdx];

//   if (userIdx === -1) {
//     return res.status(400).json({
//       message: "user not found",
//     });
//   }

//   data.splice(userIdx, 1);

//   res.status(200).json({
//     message: "user deleted",
//     user: data[userIdx],
//   });

// });

// ----------------------------------------------- delete user using filter-------------------------------------
app.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = data.find((ele) => ele.id === id);

  if (!user) {
    return res.status(400).json({
      message: "user not found",
    });
  }

  // remove user using filter
  data = data.filter((ele) => ele.id !== id);

  res.status(200).json({
    message: "user deleted",
    user,
  }); 
});

// app.listen(3000, () => {
//   console.log("server is running on port 3000");
// });

const PORT = 3001;


//--------------------------------------------------validation-----------------------------------------------------

const registerValidation = (req, res, next) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      message: "username and password are required",
    });
  }

  next(); 
};

app.post("/register", registerValidation, (req, res) => {
  res.status(200).json({
    message: "User registered successfully",
  });
});

// --------------------------------------------------authentication-----------------------------------------------------
const authMiddleware = (req, res, next) => {
  const { token } = req.query;

  if (token !== "admin123") {
    return res.status(401).json({
      message: "Unauthorized access",
    });
  }

  next(); 
};


app.get("/profile", authMiddleware, (req, res) => {
  res.status(200).json({
    message: "Welcome to profile",
  });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
