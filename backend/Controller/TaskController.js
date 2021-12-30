const TaskModel = require("../Model/TaskModel");

exports.List = async (req, res) => {
    try{
        const TaskList = await TaskModel.find();
        if(TaskList.length !== 0)
            return res.json({data : TaskList});
        else
            return res.json({data : `No record found :(`});
    } catch(err) {
        return res.json({data : `Error : ${err}`});
    }
};

exports.Add = (req, res) => {
    try{
        const { data } = req.body;

        TaskModel.create(data, (err) => {
            if(err){
                return res.json({data : `Error : ${err}`});
            } else {
                return res.json({data : `Record saved!`});
            }
        });        
    } catch(err) {
        return res.json({data : `Error : ${err}`});
    }
};

exports.Change = async (req, res) => {
    try{
        const { data } = req.body;
        const UpdatedUser = await TaskModel.findOneAndUpdate(
            {_id : data._id}
            , {$set : {
                    TaskName : data.TaskName
                    , Time: data.Time
                }
            }
            , { new : true}
        );

        if(UpdatedUser.lenght !== 0)
            return res.json({data : "Record changed!"});
        else 
            return res.json({data : `Failed ${data._id}`});
        
    } catch(err) {
        return res.json({data : `Error : ${err}`});
    }
};

exports.Delete = async (req, res) => {
    try{
        const id = req.params.id;
        const DeletedUser = await TaskModel.findOneAndDelete({_id: id});

        if(DeletedUser.lenght !== 0)
            return res.json({data : "Record deleted!"});
        else 
            return res.json({data : `Failed ${id}`});
    } catch(err){
        return res.json({data : `Error : ${err}`});
    }
};