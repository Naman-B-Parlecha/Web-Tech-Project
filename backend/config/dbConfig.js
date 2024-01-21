import mongoose from 'mongoose';

async function connectToDatabase() {
  try {
    
    const uri = 'mongodb+srv://mohitnagaraj20:XEdCOl9OwqV8Hv7m@resdb.tj9krjc.mongodb.net/';
    
    await mongoose.connect(uri);

    console.log('Connected to the database');
  } catch (error) {
    console.error('Error connecting to the database', error);
    throw error;
  }
}

export default connectToDatabase;
