import mongoose from "mongoose";

const connect = async ()=>{
  try {
    await mongoose.connect("mongodb+srv://chickisnak:bslf3IjnlnBmyGD8@cluster0.cnkleiy.mongodb.net/?retryWrites=true&w=majority");
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
  }
}

export default connect
