const { Router } = require("express");

const { getTask, saveTask, updateTask, deleteTask} = require("../controllers/taskController");

const router = Router();

router.get("/tasks", getTask);

router.post("/tasks/save", saveTask);

router.post('/tasks/update', updateTask);

router.post('/tasks/delete', deleteTask)

module.exports = router;