import React from "react";
import useInput from "../hooks/useInput";
import { getTodos } from "../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTodo } from "../api/todos";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ExampleTodo from "../components/ExampleTodo";
import Header from "../components/Header";

function Add() {
  const dispatch = useDispatch();

  const { data } = useQuery("todos", getTodos);

  // if (isLoading) {
  //   return <p>로딩중입니다....!</p>;
  // }

  // if (isError) {
  //   return <p>오류가 발생하였습니다...!</p>;
  // }

  //리액트쿼리관련코드
  const queryClient = useQueryClient();
  const mutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
      // console.log("성공");
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
      <Header />
      <h3>작성자</h3>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
        onChange={onChangeNameHandler}
      />
      <h3>제목</h3>
      <input
        type="text"
        name="title"
        value={title}
        placeholder="제목을 입력해주세요. (50자 이내)"
        onChange={onChangeTitleHandler}
      />
      <h3>내용</h3>
      <input
        type="text"
        name="content"
        value={content}
        placeholder="내용을 입력해주세요. (200자 이내)"
        onChange={onChangecontentHandler}
      />
      <br />
      <button onClick={submitButtonHandler}>추가하기</button>
      <br />

      {data.map((item) => {
        // console.log(item);
        return <ExampleTodo key={item.id} todos={item} />;
      })}
    </>
  );
}

export default Add;
