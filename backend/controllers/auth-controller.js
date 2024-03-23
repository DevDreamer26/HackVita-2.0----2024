const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

// User Registration Part

const register = async (req, res) => {
  try {
    // console.log(req.body);
    const { username, email, phone, password } = req.body;

    const userExist = await User.findOne({ email });

    if (userExist) {
      return res.status(400).json({ msg: "Email already exists !" });
    }

    // Hash the password

    const userCreated = await User.create({ username, email, phone, password });

    res.status(201).json({
      // msg: userCreated,
      msg: " Registration successful !",
      token: await userCreated.generateToken(),
      userId: userCreated._id.toString(),
    });
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// Login Logic Here

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userExist = await User.findOne({ email });

    if (!userExist) {
      return res.status(400).json({ message: "Invalid Credentials" });
    }

    const user = await bcrypt.compare(password, userExist.password);

    if (user) {
      res.status(200).json({
        msg: "Login successful",
        token: await userExist.generateToken(),
        userId: userExist._id.toString(),
      });
    } else {
      res.status(401).json({ message: "Invalid Email or Password" });
    }
  } catch (error) {
    res.status(500).json("Internal Server Error");
  }
};

// User Logic

const user = async (req, res) => {
  try {
    const userData = req.user;
    console.log(userData);

    return res.status(200).json({ userData });
  } catch (error) {
    console.log(`Error from the user route ${error}`);
  }
};

module.exports = { register, login, user };


