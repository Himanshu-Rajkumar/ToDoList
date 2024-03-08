function TaskItem({item,handelDelet,handleToggle}){
    return <div>
        <h1 style={{color: item.completed?"green":"blue"}}>{item.task}</h1>
        <button onClick={handleToggle}>{item.completed?"Yes":"No"}</button>
        <p>{item.taskAssignedTo}</p>
        <button style={{color:item.completed?"yellow":"red" , background:item.completed?"black":"white"}} onClick={handelDelet}>Delete</button>
        <hr />
        <br />
        
    </div>
}

export default TaskItem