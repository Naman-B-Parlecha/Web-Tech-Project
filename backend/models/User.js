import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: String,
    pass: String,
    cart: Array
});

const User = model('User', userSchema);

export default User;