import React, { useEffect, useState } from "react";
import TaskItem from "./Components/taskItems";



function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });
 

  function handleChange(event) {
    // Implement logic to handle form changes
    const targetName=event.target.name
    const targetValue=
    event.target.name==="completed"?
    event.target.checked:event.target.value
    setFormState({
      ...formState,
      [targetName]:targetValue
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
   
    // Implement logic to handle form submission
   setTasks([
    ...tasks,
    formState
   ])
   
  }


  // HandelDelet 
  function handelDelet(index){
    const updateArray=[...tasks]
    
    updateArray.splice(index,1)
  
   
    setTasks(updateArray)
  }
  
  // Logic of Toggle
  function handleToggle(index){
    const Array=[...tasks]
   Array[index].completed=!Array[index].completed
    setTasks(Array)

  }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" onChange={handleChange} value={formState.task} placeholder="Add Task" />
          <label>
            Completed:
            <input name="completed" checked={formState.completed} onChange={handleChange} type="checkbox" />
          </label>
          <select onChange={handleChange} value={formState.taskAssignedTo} name="taskAssignedTo">
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      {tasks.map((item, index) => (
        <TaskItem key={index} item={item} handelDelet={()=>handelDelet(index)} handleToggle={()=>handleToggle(index)} />
      ))}
    </>
  );
}

export default App;
