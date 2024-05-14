const express = require("express");
const router = express.Router();
const usersCtrl = require("../../controllers/api/usersController");
const jwt = require("jsonwebtoken");

const storeUser = (req, res, user) => {
  res.locals.user = user;
};

const getUser = (req, res) => {
  return res.locals.user;
};

const checkTokenMiddleware = (req, res, next) => {
  const header = req.get("Authorization");
  const token = header.replace("Bearer ", "");

  try {
    const payload = jwt.verify(token, process.env.SECRET);
    console.log(payload.user);
    // res.locals.user = payload.user;
    storeUser(req, res, payload.user);
    next();
  } catch (error) {
    // res.status(401).json({ error });
    storeUser(req, res, null);
    next();
  }
};

// POST /api/users
router.post("/", usersCtrl.create);
router.post("/login", usersCtrl.login);
router.get("/check-token", [checkTokenMiddleware], (req, res) => {
  const user = getUser(req, res); //res.locals.user;
  res.json({ msg: user });
});
router.get("/secret", [checkTokenMiddleware], (req, res) => {
  //? need to know the userid of the person who made the request
  res.json({ msg: "secret" });
});

module.exports = router;
