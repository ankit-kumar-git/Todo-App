import React from "react";
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {

    //Another way to add styling on element by making a object
    const myStyle={
        minHeight:"70vh",
        margin:"40px auto",
        backgroundColor:"#fcfcf1"
    }

  return (
    <div className="container" style={myStyle}>
      <h3 className="text-center my-3">Todos List</h3><hr/>

      {props.todos.length ===0
        ? "No Todos to Display"
        : props.todos.map((todo) => {
            return (
                <>
              <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} /><hr/>
              </>
            );
          })}
    </div>
  );
};
