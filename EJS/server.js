// // // EMBEDDED JAVA SCRIPT--->>>> 
// // // ejs is template engine  with the help of epress we can use ejs as template engine seo friendly and frontend and backend both in single project

// // import express from 'express';

// // const app = express();

// // app.set("view engine", "ejs");

// // app.get("/", (req, res) => {
// //   res.render("index");
// // });

// // // ------------------------------------------- databinding in ejs ------------------------------------------
// // app.get("/user", (req, res) => {
// //     let userData = {
// //         name: "John Doe",
// //         age: "30"
// //     }
// //     res.render("user", {userData});

// // });

// // app.listen(3001, () => {
// //   console.log("Server is running on port 3000");
// // });


// import express from "express";
// import methodOverride from "method-override";
// import pageRoute from "./router/pageRoute.js";
// import { use } from "react";

// const app = express();

// app.use(methodOverride("_method"));
// app.use(pageRoute);
// app.use(userRoute);
// app.set("view engine", "ejs");
// app.use(express.urlencoded({ extended: true }));

// // app.get("/", (req, res) => {
// //   res.render("index");
// // });

// let userData = [
//   {id:1, name: "John Doe", age: 30},
//   {id:2, name: "Jane Smith", age: 25},
// ];

// // app.get("/user/edit/:id", (req, res) => {
// //   const id = req.params.id;
// //   const user = userData.find((ele) => ele.id == id);
// //   console.log(user);
// //   res.render("edit", { user });
// // });
// // app.get("/user/edit/:id", (req, res) => {
// //   const id = req.params.id;

// //   const user = userData.find((ele) => ele.id == id);

// //   if (!user) {
// //     return res.send("User not found");
// //   }

// //   res.render("edit", { user });
// // });

// // app.get("/editpage/:id",(req,res)=>{
// //   const id = req.params.id;

// //   const user = userData.find((ele)=> ele.id==id);
// //   console.log(user)

// //   res.render("edit",{userData:[user]})
// // });

// // app.put("/api/user/:id",(req,res)=>{
// //   const id = req.params.id;
// //   const {name, age} = req.body;
// //   const useridx = userData.findIndex((ele) => ele.id == id);
// //   if(useridx === -1){
// //     return res.send("user not found");
// //   }
// //   userData[useridx] = {id, name, age};
// //   res.redirect("/user");
// // });

// userData.forEach(ele => {
//   console.log(ele);
// });

// // app.get("/user", (req, res) => {
// //   // const userData = {
// //   //   name: "John Doe",
// //   //   age: 30
// //   // };
// //   res.render("user", { userData });
// // });

// // app.post("/api/user", (req, res) => {
// //   const { name, age } = req.body;
// //   const newUserData = {
// //     id: userData.length + 1,
// //     name,
// //     age
// //   };
// //   userData.push(newUserData);
// //   res.redirect("/user");
// // });



// // app.delete("/api/user/:id", (req, res) => {
// //   const userId = req.params.id;
// //   const useridx = userData.findIndex((ele) => ele.id == userId);

// //   if (useridx === -1) {
// //     return res.send("user not found");
// //   }

// //   userData.splice(useridx, 1);
// //   res.redirect("/user");
// // });


// app.get("/list", (req, res) => {

//     let arr = ["apple", "banana", "grapes", "mango"];

//     res.render("list", {arr});

// });

// // app.get("/form", (req, res) => {
// //     res.render("form");
// // });


// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });


import express from "express";
import methodOverride from "method-override";

import pageRoute from "./router/pageRoute.js";
import userRoute from "./router/userRoute.js";

const app = express();

// middleware FIRST
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

// routes AFTER middleware
app.use(pageRoute);
app.use(userRoute);

// extra page
app.get("/list", (req, res) => {
  let arr = ["apple", "banana", "grapes", "mango"];
  res.render("list", { arr });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
