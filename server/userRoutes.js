import {  Router } from "express";
// const jwt = require("jsonwebtoken");
import jwt from "jsonwebtoken";
import { User } from "./userModel.js";
import "dotenv/config";

const router = Router();

router.post("/auth", async (req, res) => {
  const user = new User(req.body);
  try {
    await user.save();
    const accessToken = jwt.sign(
      user.toObject(),
      process.env.ACCESS_TOKEN_SECRET
    );
    res.setHeader("Set-Cookie", `user=${accessToken}; Path=/`);
    res.send("user created");
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
});

router.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.send(users);
  } catch (err) {
    console.log(err);
  }
});
router.get("/user", async (req, res) => {
  try {
    const data = jwt.verify(
      req.headers.authorization,
      process.env.ACCESS_TOKEN_SECRET
    );
    const user = await User.find({ email: data?.email });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
});

router.get("/messages", async (req, res) => {
  const { sender, reciver } = req.query;
  const user = await User.find({ email: reciver });
  const filteredUser = user[0]?.messages?.filter((message) => message.sender === sender && message.reciver === reciver || message.sender === reciver && message.reciver === sender);
  res.send(filteredUser);
})

export default router;
