const express = require("express");
const router = express.Router();

const TaskController = require("../Controller/TaskController");

router.get("/", TaskController.List);
router.post("/Add", TaskController.Add);
router.put("/Change",TaskController.Change);
router.delete("/Delete/:id",TaskController.Delete);

module.exports = router;