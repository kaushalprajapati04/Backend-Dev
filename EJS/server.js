// // EMBEDDED JAVA SCRIPT--->>>> 
// // ejs is template engine  with the help of epress we can use ejs as template engine seo friendly and frontend and backend both in single project

// import express from 'express';

// const app = express();

// app.set("view engine", "ejs");

// app.get("/", (req, res) => {
//   res.render("index");
// });

// // ------------------------------------------- databinding in ejs ------------------------------------------
// app.get("/user", (req, res) => {
//     let userData = {
//         name: "John Doe",
//         age: "30"
//     }
//     res.render("user", {userData});

// });

// app.listen(3001, () => {
//   console.log("Server is running on port 3000");
// });


import express from "express";

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/user", (req, res) => {
  const userData = {
    name: "John Doe",
    age: 30
  };
  res.render("user", { userData });
});

app.get("/list", (req, res) => {

    let arr = ["apple", "banana", "grapes", "mango"];

    res.render("list", {arr});

});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
