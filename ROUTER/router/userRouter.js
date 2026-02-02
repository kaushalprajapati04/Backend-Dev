import express from 'express';

const router = express.Router();

let loggin = (req, res, next) => {
  console.log("this is middleware");
  console.log(req.url)
  next();
}

router.use(loggin);

router.get("/", (req, res) => {
  res.send("server is running");
});

router.get("/user", (req, res) => {
  res.send("user route");
});

export default router;