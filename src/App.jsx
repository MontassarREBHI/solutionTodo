import React,{useState}  from "react";
import CreateTodo from "./Components/CreateTodo.jsx";
import Todos from "./Components/Todos.jsx";
import data from "./data/dummyData";



const App = () => {
  const [tasks,setTasks]=useState(data)
  const status=(id)=>{
  var temp =tasks.map(task=>task.id===id?{...task,completed:!task.completed}:task)
  setTasks(temp);
  }
  const deleteTodo=(id)=>{
    var temp =tasks.filter(task=>task.id!==id)
    setTasks(temp);
  }
  const updateTodo=(id,newT)=>{
    var temp =tasks.map(task=>task.id===id?{...task,title:newT}:task)
  setTasks(temp);
  }
  const addTodo=(title)=>{
    var obj={
      userId: 2,
      id: tasks.length?tasks[tasks.length-1].id+1:1,
      title: title,
      completed: false,
    }
    setTasks([...tasks,obj])
  }
  const handleMove=(PrevPosition,newPostion)=>{
       var task=tasks[PrevPosition];
       deleteTodo(PrevPosition);
       var newData=[...tasks]
       newData.splice(newPostion-1,0,task) 
       setTasks([...new Set(newData)])
  }
  return (
    <>
    <Todos tasks={tasks} status={status} deleteTodo={deleteTodo} updateTodo={updateTodo} handleMove={handleMove} />
    <CreateTodo addTodo={addTodo}/>
    </>
  );
};

export default App;
