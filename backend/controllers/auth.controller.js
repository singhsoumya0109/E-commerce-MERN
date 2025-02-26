import User from "../models/user.model.js";

export const signup = async (req, res) => {
    const { name, email, password } = req.body;
    const userExists = await User.findOne({ email });

    if (userExists)
    {
        return res.status(400).json({ message: "User already exits" });
    }

    const newUser = await User.create({ name, email, password });
    res.status(201).json({ newUser, message: "User created" });
};

export const login = async (req, res) => {
  res.send("login");
};

export const logout = async (req, res) => {
  res.send("logout");
};