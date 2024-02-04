import User from "../models/User.js";
import bcrypt from "bcrypt";
const saltRounds = 10;

export const findUser = async (req, res) => {
  const password = req.body.pass;
  try {
    const user = await User.findOne({ email: req.body.email });
    const storedPassword = user.pass;
    console.log(password, storedPassword);
    bcrypt
      .compare(password, storedPassword)
      .then((ans) =>
        !ans
          ? res.status(404).json({ message: "User not found" })
          : res.status(200).json(user)
      );
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const addUser = async (req, res) => {
  try {
    bcrypt.hash(req.body.pass, saltRounds, async function (err, hash) {
      if (err) {
        res.status(500).json({ message: err.message });
      } else {
        let body = req.body;
        body.pass = hash;
        const user = await User.create(body);
        res.status(201).json(user);
      }
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateCart = async (req, res) => {
  console.log(req.body.cart);
  try {
    const updatedCart = await User.findByIdAndUpdate(req.params.u_id, {
      cart: req.body.cart,
    });
    res.status(200).json({ cart: updatedCart.cart });
  } catch {
    res.status(404).json({ message: "User not found" });
  }
};


