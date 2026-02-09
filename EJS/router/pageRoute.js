import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});
router.get("/editpage/:id",(req,res)=>{
  const id = req.params.id;

  const user = userData.find((ele)=> ele.id==id);
  console.log(user)

  res.render("edit",{userData:[user]})
});

router.get("/user", (req, res) => {
  res.render("user", { userData });
});

export default router;