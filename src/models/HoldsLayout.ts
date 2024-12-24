import mongoose, { Schema } from "mongoose";

const LayoutSchema: Schema = new Schema({
  name: { type: String, required: true },
  holds: { type: String, required: true },
});

export default mongoose.model("HoldsLayout", LayoutSchema);
