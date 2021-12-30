import React, { useState } from "react";
const TaskForm = (props) => {
    const [UserInput, setUserInput] = useState({
        TaskName: "",
        Time : ""
    });

    const SubmitHandler = (e) => {
        e.preventDefault();
        props.OnNewTask(UserInput);
        setUserInput({
            TaskName : "",
            Time : ""
        });
    };

    const TaskNameHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                TaskName : e.target.value
            }
        });
    };

    const TimeHandler = (e) => {
        setUserInput((prevState) => {
            return {
                ...prevState,
                Time : new Date(e.target.value).toLocaleDateString()
            }
        });
    };

    return(
        <div className="col-md-10">
            <div className="card bg-muted">
                <div className="card-header">
                    <h4>Add new task</h4>    
                </div>
                <div className="card-body bg-light">        
                    <form onSubmit={SubmitHandler} className="form">
                        <div className="row">
                            <div className="form-group col-md-5">                
                                <input type="text" name="txtTask" onChange={TaskNameHandler} placeholder="Task" className="form-control"></input>
                            </div>
                            <div className="form-group col-md-5">                
                                <input type="date" name="dtTime" onChange={TimeHandler} placeholder="Task" className="form-control"></input>
                            </div>
                            <div className="form-group col-md-2">               
                                <div className="btn-group">
                                    <button type="submit" name="btnSubmit" className="btn  btn-primary">Save</button>
                                    <button type="button" name="btnCancel" className="btn  btn-danger" onClick={props.OnCancel}>Cancel</button>
                                </div> 
                            </div>
                        </div>
                    </form>                   
                </div>
            </div>
        </div>
    );
};
export default TaskForm;
