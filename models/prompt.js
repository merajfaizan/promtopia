import mongoose, { Schema, model, models } from "mongoose";

const PromptSchema = new Schema({
  creator: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  prompt: {
    type: String,
    required: [true, "Prompt Is Required"],
  },
  tag: {
    type: String,
    required: [true, "Tag Is Required"],
  },
});

const Prompt = models.prompt || model("Prompt", PromptSchema);

export default Prompt;
