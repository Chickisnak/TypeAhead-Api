import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  _id: { type: mongoose.Types.ObjectId, required: true },
  index: { type: Number, required: true },
  name: { type: String, required: true },
  isActive: { type: Boolean, required: true },
  registered: { type: Date, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  eyeColor: { type: String, required: true },
  favoriteFruit: { type: String, required: true },
  company: {
    title: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    location: {
      country: { type: String, required: true },
      address: { type: String, required: true }
    }
  },
  tags: { type: [String], required: true }
});

const UserModel = mongoose.model('User', userSchema);

export default UserModel
