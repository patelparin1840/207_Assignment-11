import React from "react";
const Task = (props) => {
  const EditTaskHandler = () => {
    props.EditTask(props);
  };

  const DeleteTaskHandler = () =>{        
      props.DeleteTask(props.id);             
  };
    return (
        <div className="card m-3 bg-light text-dark">
          <div className="card-body">
            <div className="row">
              <div className="col-md-10">
                <h4>{props.TaskName}</h4>
                <h5>{new Date(props.Time).toLocaleDateString()}</h5>
                <h6>{props.id}</h6>
              </div>
              <div className="col-md-2 ">
                <div className="btn-group">
                  <button type="button" className="btn btn-info" onClick={EditTaskHandler}>&#9999;</button>
                  <button type="button" className="btn btn-danger" onClick={DeleteTaskHandler}>&times;</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default Task;