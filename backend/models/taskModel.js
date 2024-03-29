import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "please enter task title"],
    },
    description: {
      type: String,
      required: true,
      default: "",
    },
    isDone: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export const Task = mongoose.model("task", taskSchema);


