import React, {useState, useEffect} from 'react';
import axios from "axios";
import Task from "./components/Task/Task";
import TaskForm from './components/TaskForm/TaskForm';
import EditTaskForm from './components/TaskForm/EditTaskForm';

function App() {  
  const baseURL = "http://localhost:5000/Task";
  const [TaskList, setTaskList] = useState([]);

  const [showForm, setShowForm] = useState(false);

  const [editForm, setEditForm] = useState(false);

  const [editProps, setEditProps] = useState([]);

  const FetchTask = async () => {
    const res = await axios.get(baseURL);
    const data = res.data.data;
    console.log(data);
    setTaskList(data);
  };

  useEffect(() => {
      FetchTask();
  },[]);

  const NewTaskHandler = (data) => {
      const task = {
        TaskName : data.TaskName,
        Time : data.Time
      };
      
      axios.post(`${baseURL}/Add`,{
        data : task
      }).then((success) => {
        alert(success.data.data);
        console.log(success.data);        
      })

      FetchTask();

      console.log(data);
      setShowForm(false);
  };  

  const EditTaskHandler = (props) => {
      console.log(props); 
      setEditProps(props);           
      setEditForm(true);
  };

  const ChangeTaskHandler = (data) => {
      const task = {
        _id : data.id,
        TaskName: data.TaskName,
        Time : data.Time
      };

      console.log(task);

      axios.put(`${baseURL}/Change`,{
        data : task
      }).then((response) => {
        console.log(response);
      })

      FetchTask();

      console.log(data);
      setEditForm(false);
  };

  const DeleteTaskHandler = (id) => {    
    axios.delete(`${baseURL}/Delete/${id}`).then((success) => {
      alert(success.data.data);
      console.log(success.data);
    })

    setTaskList(TaskList.filter((task) => task._id !== id));    
  };

  return (
    <div className='container bg-secondary pb-3'>
        <div className='row bg-light'>
          <div className='d-flex justify-content-between p-0'>
            <h3 style={{paddingLeft:"10px"}}>Task tracker</h3>                      
            <button type='button' className='btn btn-sm btn-dark' onClick={() => setShowForm(true)}>Add New Task</button>
          </div>                    
        </div>
        {showForm &&
          <div className="row d-flex justify-content-center m-3">
            <TaskForm OnNewTask={NewTaskHandler} OnCancel={() => setShowForm(false)}></TaskForm>  
          </div>
        }

        {editForm &&
          <div className="row d-flex justify-content-center m-3">
              <EditTaskForm OldData={editProps} OnChangeTask={ChangeTaskHandler} 
              OnCancel={() => setEditForm(false)}></EditTaskForm>
          </div>
        }

        {
          TaskList.map((task) => {return <Task key={task._id} 
            id={task._id}
            TaskName={task.TaskName}
            Time={task.Time}   
            EditTask={EditTaskHandler}         
            DeleteTask={DeleteTaskHandler}
            ></Task>})
        }
    </div>
  );
}

export default App;
