
import Dish from '../models/Dish.js';

export const getAllDishes = async (req, res) => {
  try {
    const dishes = await Dish.find();
    res.status(200).json(dishes);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getOneDish = async (req, res) => {
  try {
    const dish = await Dish.findOne({id:req.params.d_id});
    if (!dish) {
      res.status(404).json({ message: 'Dish not found' });
    } else {
      res.status(200).json(dish);
    }
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

