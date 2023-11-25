import mongoose from "mongoose";
const { Schema,model,models,ObjectId } = mongoose;
const userSchema= new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  }
})
export default models.User || model('User',userSchema);