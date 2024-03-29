import { Task } from "../models/taskModel.js";

export const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const getAllTasks = async (_req, res) => {
  try {
    const tasks = await Task.find({});
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updateTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndUpdate(id, req.body);
    if (!task) {
      res
        .status(404)
        .json({ message: `cannot find any product with id ${id}` });
    }

    const updatedTask = await Task.findById(id);
    res.status(200).json(updatedTask);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteTaskById = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findByIdAndDelete(id, req.body);
    if (!task) {
      return res
        .status(404)
        .json({ message: `cannot find any product with id ${id} ` });
    }

    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
