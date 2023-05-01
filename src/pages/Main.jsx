import React from "react";
import { Link } from "react-router-dom/dist";
import { getTodos } from "../api/todos";
import { useQuery } from "react-query";
import styled from "styled-components";
import { useNavigate } from "react-router-dom/dist";

function Main() {
  const navigate = useNavigate();

  const { isLoading, isError, data } = useQuery("todos", getTodos);

  if (isLoading) {
    return <p>로딩중입니다....!</p>;
  }

  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <>
      <h1>무엇을 할까요?</h1>

      <Wrapper
        onClick={() => {
          navigate(`/ADD`);
        }}
      >
        할일 기록하기
      </Wrapper>
      <Wrapper
        onClick={() => {
          navigate(`/TodoList`);
        }}
      >
        TODO LIST
      </Wrapper>
    </>
  );
}

export default Main;

const Wrapper = styled.div`
  border: 1px solid rgb(210, 199, 199);
  padding: 20px;
  height: 80px;
  font-size: 20px;
  margin: 30px;
`;
