import mongoose from "mongoose";

const mcqSchema = new mongoose.Schema({
  id: String,
  Questions: String,
  options: Array,
  answer: String,
});

const Mcq = mongoose.models.mcqSchema || mongoose.model("mcqSchema", mcqSchema);

export default Mcq;
