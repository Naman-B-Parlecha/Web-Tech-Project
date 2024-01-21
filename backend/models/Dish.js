import { Schema, model } from "mongoose";

const dishSchema = new Schema({
    id: { type: String, trim: true, unique: true },
    name: String,
    desp: String,
    price: Number,
    img: String,
    type: Array
});

const Dish = model('Dish', dishSchema);

export default Dish;