const User = require("../models/userModel");
const jwt = require("jsonwebtoken");

const handleRegister = async (req, res, next) => {
  try {
    const { email, telephone } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ error: "Name, email, telephone and password is required" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must be at lease 5 characters" });
    }

    const user = await User.create(req.body);

    res.status(200).json("Registered");
  } catch (error) {
    next(error);
  }
};

const handleLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password)
      return res
        .status(400)
        .json({ error: "Username and password is required" });

    const user = await User.findOne({ email });
    if (!user) {
      res.status(401).json({ error: "Wrong username and/or password" });
    } else if (!(await user.matchPassword(password))) {
      res.status(401).json({ error: "Wrong username and/or password" });
    } else {
      res.status(200).json("Login Successful");
    }
  } catch (error) {
    next(error);
  }
};

const handleRefresh = async (req, res) => {
  res.status(200).json("Refreshed");
};

module.exports = { handleRegister, handleLogin, handleRefresh };
