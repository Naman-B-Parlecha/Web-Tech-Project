import User from "../models/User.js";

export const findUser = async (req, res) => {
    try {
        // console.log(req.query.email);
        // console.log(req.query.pass);
        // const user = await User.findById(req.params.id);
        const user = await User.findOne({ email: req.body.email, pass: req.body.pass });
        if (!user) {
            res.status(404).json({ message: "User not found" });
        }else{
            res.status(200).json(user);
        }
    }
    catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const addUser = async (req, res) => {
    try {
        console.log(req.body);
        const user = await User.create(req.body);
        res.status(201).json(user);
    }
    catch (error) {
        res.status(500).json({ message: error.message });
    }
}
