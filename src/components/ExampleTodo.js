import React from "react";
import { useMutation, useQuery } from "react-query";
import { getTodos } from "../api/todos";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";
import { useQueryClient } from "react-query";
import { deleteTodo } from "../api/todos";

const Box = styled.div`
  border: 1px solid gray;
  margin-bottom: 30px;
`;

function ExampleTodo({ todos }) {
  const queryClient = useQueryClient();

  const deleteTodoHandler = (todoId) => {
    axios.delete(`http://localhost:4000/todos/${todoId}`);
    queryClient.invalidateQueries("todos");
  };

  return (
    <>
      <Box>
        <div> {todos.title}</div>
        <div>{todos.name}</div>
        <button onClick={() => deleteTodoHandler(todos.id)}>delete</button>
        <br />
      </Box>
    </>
  );
}

export default ExampleTodo;
