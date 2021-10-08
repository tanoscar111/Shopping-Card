import mongoose from "mongoose";
const schema = new mongoose.Schema({
  useName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  id: { type: String },
 
}, { timestamps: true });
export default mongoose.model("User", schema);
