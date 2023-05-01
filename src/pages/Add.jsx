import React from "react";
import useInput from "../hooks/useInput";
import { getTodos } from "../api/todos";
import { useMutation, useQuery, useQueryClient } from "react-query";
import { addTodo } from "../api/todos";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import ExampleTodo from "../components/ExampleTodo";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate(`/TodoList`);

  const submitButtonHandler = () => {
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
      <Wrapper>
        <h3>작성자</h3>
        <Inputbox
          type="text"
          name="name"
          value={name}
          placeholder="작성자의 이름을 입력해주세요. (5자 이내)"
          onChange={onChangeNameHandler}
        />
        <h3>제목</h3>
        <Inputbox
          type="text"
          name="title"
          value={title}
          placeholder="제목을 입력해주세요. (50자 이내)"
          onChange={onChangeTitleHandler}
        />
        <h3>내용</h3>
        <Inputcontent
          type="text"
          name="content"
          value={content}
          placeholder="내용을 입력해주세요. (200자 이내)"
          onChange={onChangecontentHandler}
        />
        <br />
        {/* <Button onClick={submitButtonHandler}>추가하기</Button>
         */}
        <Button
          onClick={() => {
            submitButtonHandler();
            navigate(`/TodoList`);
          }}
        >
          추가하기
        </Button>
      </Wrapper>
    </>
  );
}

export default Add;

const Inputbox = styled.input`
  height: 50px;
  border: 1px solid rgb(169, 169, 169);
  width: 150vh;
  border-radius: 5px;
`;

const Inputcontent = styled.input`
  height: 200px;
  border: 1px solid rgb(169, 169, 169);
  width: 150vh;
  border-radius: 5px;
`;

const Wrapper = styled.div`
  margin: 30px;
`;

const Button = styled.div`
  width: 150vh;
  height: 50px;
  border: 1px solid rgb(169, 169, 169);
  border-radius: 5px;
  margin-top: 30px;
  text-align: center;
`;

//maxlength는 입력할 수 있는 글자수를 제한한다.
