const Task = require('../models/Task');

const getAllTasks = async (req, res) => {
 try {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
 } catch (error) {
  res.status(500).json({ msg: error });
 }
};


const createTask = async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.status(201).json({ task });
  } catch (error) {
    res.status(500).json({ msg: error });
  }
};


const getTask = async (req, res) => {
  try {
    const { id: taskID } = req.params;
    const task = await Task.findOne({ _id: taskID });

    if(!task) {
      return res.status(404).json({ msg: `Task with id ${taskID} not found` });
    };

    res.status(200).json({ task });
   } catch (error) {
    res.status(500).json({ msg: error });
   }
};


const updateTask = (req, res) => {
  res.send('update task');
};


const deleteTask = async (req, res) => {
  try {
    
  } catch (error) {
    
  }
};


module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask
}

