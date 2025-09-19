import mongoose from 'mongoose';
import { config } from '../config.js';

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://pratyakshaverma:Pr%401yaksha@cluster0.xtmfje2.mongodb.net/?retryWrites=true&w=majority");
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;