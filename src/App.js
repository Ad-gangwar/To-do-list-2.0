import React, {useReducer} from "react";
import "./styles.css";
import Todo from "./Todo";
export const ACTIONS={
  ADD_TODO: 'add to-do',
  TOGGLE_TODO: 'toggle todo',
  DELETE_TODO: 'delete todo'
}
function reducer(todos, action){
  switch(action.type){
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map(todo => {
        if(todo.id === action.payload.id){
          return {...todo, complete : !todo.complete}
        }
      })
    case ACTIONS.DELETE_TODO:
      return todos.filter(todo =>  todo.id !== action.payload.id );
    default:
      return todos
  }
}

function newTodo(name){
  return {id: Date.now(), name: name, complete: false}
}

function App() {
  const [todos, dispatch]=useReducer(reducer, []);
  const [name , setName]=React.useState("");

  function handleSubmit(event){
    dispatch({type: ACTIONS.ADD_TODO, payload: {name: name}});
    setName(' ');

    event.preventDefault();
  }

  // console.log(todos);
  return (
    <div className="container"> 
    <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" value={name} onChange={e=>{
          setName(e.target.value);
        }}></input>
      </form>
      {todos.map(todo => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch}/>
      })}
    </div>
  );
}

export default App;
