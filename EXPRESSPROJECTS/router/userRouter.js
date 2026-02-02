import express from 'express';

const router = express.Router();


router.get("/", (req, res) => {
  res.status(200).json({
    message: "home route",
  });
});

router.get("/user", (req, res) => {
  res.status(200).json({
    message: "all user",
    data,
  });
});

// ----------------------------------------------- creation-------------------------------------
router.post("/user", (req, res) => {
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

// ----------------------------------------------- updation-------------------------------------
router.put("/user/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let {username} = req.body;
    // find user by id
  let userIdx = data.findIndex((ele) => ele.id == id);

  if (userIdx == -1) {
    res.status(400).json({
      message: "user not found",
    });
  }

  let updatedUser = { ...data[userIdx], username: username };

  data[userIdx] = updatedUser;

  res.status(200).json({
    message: "user updated",
  });
});


// ----------------------------------------------- deletion-------------------------------------
router.delete("/user/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const user = data.find((ele) => ele.id === id);

  if (!user) {
    return res.status(400).json({
      message: "user not found",
    });
  }

  data = data.filter((ele) => ele.id !== id);

  res.status(200).json({
    message: "user deleted",
    user,
  }); 
});

export default router;