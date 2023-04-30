import React from "react";
import styled from "styled-components";
import { getTodos } from "../api/todos";
import { useQuery } from "react-query";
import DeleteButtonIcon from "../icons/DeleteButtonIcon";
import { useNavigate } from "react-router-dom";

function TodoLists() {
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  if (isLoading) {
    return <p>로딩중입니다...!</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  return (
    <div>
      <TodoListsTitleArea>
        <div>내 할일</div>
      </TodoListsTitleArea>
      <div>
        <div>
          {data.map((item) => (
            <Todo
              key={item.id}
              id={item.id}
              name={item.name}
              title={item.title}
            ></Todo>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TodoLists;

const TodoListsTitleArea = styled.div`
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  width: 100%;
  margin: 24px 0px;

  div {
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;
    text-decoration: none;
    font-size: 32px;
  }
`;

const Todo = ({ id, name, title }) => {
  const navigate = useNavigate();
  return (
    <TodoWrapper
      onClick={() => {
        navigate(`/Detail/${id}`);
      }}
    >
      <div id='upper-div'>
        <div id='todo-title-text'>{title}</div>
        <DeleteButtonIcon />
      </div>
      <div>
        <div>{name}</div>
      </div>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  padding: 12px;
  height: 90px;
  border: 1px solid rgb(221, 221, 221);
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  width: 100%;
  margin-bottom: 12px;
  box-sizing: border-box;

  #upper-div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px;
    margin: 0px;

    #todo-title-text {
      box-sizing: border-box;
      padding: 0px;
      margin: 0px;
      font-size: 20px;
    }
  }
`;
