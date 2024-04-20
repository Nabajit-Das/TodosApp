import React from 'react'
import { Todoitem } from './TodoItem'

export default function Todos(props) {
    let myStyle={
        minHeight: "40vh",
        margin: "40px auto"
    }
    return (
        <div className='container' style={myStyle}>
            <h5 className='my-3'>Todo List</h5>
            {props.todos.length===0? "No Todos to display":  
            props.todos.map((todo)=>{
                console.log(todo.sno);
                return (<Todoitem todo={todo} key={todo.sno} onDelete={props.onDelete}/>   
                )
            })
              } 
            
        </div>
    )
}
