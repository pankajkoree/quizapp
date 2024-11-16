import mongoose from "mongoose";

// schema for mcq
const mcqSchema = new mongoose.Schema({
  id: String,
  Questions: String,
  options: Array,
  answer: String,
});

const Mcq = mongoose.models.mcq || mongoose.model("mcq", mcqSchema);

export default Mcq;
