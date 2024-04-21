import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectToDatabase() {
  try {
    const uri = process.env.MONGODB_URI;
    
    await mongoose.connect(uri);

    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}

export default connectToDatabase;