const mongoose = require("mongoose");
mongoose.pluralize(null);

const TaskSchema = mongoose.Schema({    
    TaskName : String,
    Time : {type : Date, default : Date.now},
    InsertedTime : {type : Date, default : Date.now}
});

const TaskModel = mongoose.model("TaskMaster",TaskSchema);

module.exports = TaskModel;