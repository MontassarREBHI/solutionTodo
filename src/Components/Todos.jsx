import React from 'react';
import Todo from './Todo.jsx';

const Todos = ({tasks,status,deleteTodo,updateTodo,handleMove}) => {
    return (
        <div>Todos
            <table>
                <thead>
                    <tr>
                        <th>Todo</th>
                        <th>Status</th>
                        <th>Edit</th>
                        <th>Delete</th>
                        <th>Move</th>
                    </tr>
                </thead >
                <tbody>
                    {tasks.map((task,i)=><Todo handleMove={handleMove} status={status} key={i} pos={i} task={task} deleteTodo={deleteTodo} updateTodo={updateTodo}/>)}
                </tbody>
            </table>
        </div>)
}

export default Todos;