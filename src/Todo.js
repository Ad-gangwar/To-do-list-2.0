import React from "react";
import {ACTIONS} from "./App"
//we can either pass props or directly pass {todo}
export default function Todo(props){
    return(
        <div className="todo">
        <li style={{color: props.todo.complete? "green": "red"}}>{props.todo.name}</li>
        <button onClick={()=>{
            props.dispatch({type: ACTIONS.TOGGLE_TODO, payload: {id: props.todo.id}})
        }}>Toggle</button>
        <button onClick={()=>{
            props.dispatch({type: ACTIONS.DELETE_TODO, payload: {id: props.todo.id}})
        }}>Delete</button>
        </div>
    );
};