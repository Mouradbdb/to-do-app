import express from "express";
import mongoose from "mongoose";
import { uri } from "./constants.js";
import cors from "cors";
import {
  createTask,
  getAllTasks,
  updateTaskById,
  deleteTaskById,
} from "./controllers/tasks.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/todos", getAllTasks);

app.patch("/todos/:id", updateTaskById);

app.delete("/todos/:id", deleteTaskById);

app.post("/todos", createTask);

mongoose.set("strictQuery", false);
mongoose
  .connect(uri)
  .then(() => {
    console.log("connected to mongoDb");
    app.listen(4000, () => {
      console.log("listening on http://localhost:4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
