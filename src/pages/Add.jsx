import React from "react";
import useInput from "../hooks/useInput";
import { getTodos } from "../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTodo } from "../api/todos";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

function Add() {
  const dispatch = useDispatch();

  //리액트쿼리관련코드
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      // queryClient.invalidateQueries("")
      console.log("성공");
    },
  });

  const [name, onChangeNameHandler] = useInput();
  const [title, onChangeTitleHandler] = useInput();
  const [content, onChangecontentHandler] = useInput();

  const submitButtonHandler = () => {
    // alert("연결");
    // 추가하려는 투두
    const newTodo = {
      id: uuidv4(),
      name: name,
      title: title,
      content: content,
      isDone: false,
    };

    mutation.mutate(newTodo);
  };

  return (
    <>
      <h3>작성자</h3>
      <input
        type="text"
        name="name"
        value={name}
        onChange={onChangeNameHandler}
      />
      <h3>제목</h3>
      <input
        type="text"
        name="title"
        value={title}
        onChange={onChangeTitleHandler}
      />
      <h3>내용</h3>
      <input
        type="text"
        name="content"
        value={content}
        onChange={onChangecontentHandler}
      />
      <br />
      <button onClick={submitButtonHandler}>추가하기</button>
    </>
  );
}

export default Add;
