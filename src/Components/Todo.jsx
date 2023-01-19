import React, {useState} from 'react';

const Todo = ({task,status,deleteTodo,updateTodo,handleMove,pos}) => {
    const[postion,setPosition]=useState(0)
    const [edit,setEdit]=useState(false)
    const [textChange,setTextChange]=useState(task.title)
    return (
    <tr>
        <td>{task.title}</td>
        <td>{task.completed?"completed":"Not completed"} <button onClick={()=>status(task.id)}>✔</button> </td>
        <td><button onClick={()=>setEdit(!edit)}>Edit</button>{edit? <><input type="text" value={textChange} onChange={(e)=>setTextChange(e.target.value)}/> <button onClick={()=>updateTodo(task.id,textChange)}>Ok</button></> :null }</td>
        <td><button onClick={()=>deleteTodo(task.id)}>Delete</button></td>
        <td> <input type="number" onChange={(e)=>setPosition(e.target.value)} /><button onClick={()=>handleMove(pos,postion)}>Move task</button> </td>
    </tr>
        )
}

export default Todo;
