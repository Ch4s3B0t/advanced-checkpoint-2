import mongoose from "mongoose";

const schema = new mongoose.Schema({
 name: {
   required: true,
   type: String
 },
 length: {
   required: true,
   type: String
 },
 origin: {
   required: true,
   type: String
 }
});

const SwordModel = mongoose.model("Sword", schema);
export default SwordModel;