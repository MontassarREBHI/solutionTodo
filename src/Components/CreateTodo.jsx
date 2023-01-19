import React, {useState} from 'react';

const CreateTodo = ({addTodo}) => {
    const [title,setTitle]=useState('');
    return (
        <div>
            <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
                 <button onClick={()=>{addTodo(title);setTitle('')}}>Add</button>
        </div>

    );
}

export default CreateTodo;




