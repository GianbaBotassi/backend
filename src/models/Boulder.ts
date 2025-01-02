import mongoose, { Schema } from "mongoose";

const BoulderSchema: Schema = new Schema({
  name: { type: String, required: true },
  grade: { type: String, required: true },
  holds: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.model("Boulder", BoulderSchema);
