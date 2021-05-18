import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";


export const AddTodo = (props) => {

  const myStyle={
    backgroundColor:"#f9f9f9"
  }


  const [title, setTitle] = useState(" ");
  const [desc, setDesc] = useState(" ");


  //Submit Function for Form
  const submit = (e) => {
    e.preventDefault();
    if (title === " " || desc ===" ") {
      alert("Tilte or Description cannot be empty!");
      setTitle(" ");
      setDesc(" ");
    } else {
      props.addTodo(title, desc);
      setTitle(" ");
      setDesc(" ");
    }
  };


  return (
    <div className="container my-3" style={myStyle} >
      <h3>Add new Todo</h3>
      <Form onSubmit={submit}>
        <Form.Group controlId="title">
          <Form.Label>Todo Title</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="desc">
          <Form.Label>Todo Description</Form.Label>
          <Form.Control
            type="text"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </Form.Group>

        <Button className="btn-sm" variant="success" type="submit">
          Add Todo
        </Button>
      </Form>
    </div>
  );
};
