import React from "react";
import styled from "styled-components";
import { getTodos, deleteTodo } from "../api/todos";
import { useQuery, useQueryClient, useMutation } from "react-query";
import DeleteButtonIcon from "../icons/DeleteButtonIcon";
import { useNavigate } from "react-router-dom";

function TodoLists() {
  // React - Query 비동기 데이터 관리
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
          {data?.map((item) => (
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
  margin: 24px 0px;

  div {
    font-size: 32px;
  }
`;

const Todo = ({ id, name, title }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const handleDelete = (event, id) => {
    event.stopPropagation();
    const result = window.confirm("정말 삭제하시겠습니까?");
    result && mutation.mutate(id);
  };

  return (
    <TodoWrapper
      onClick={() => {
        navigate(`/Detail/${id}`);
      }}
    >
      <div id="upper-div">
        <div id="todo-title-text">{title}</div>
        <button onClick={(event) => handleDelete(event, id)}>
          <DeleteButtonIcon />
        </button>
      </div>
      <div>
        <div>{name}</div>
      </div>
    </TodoWrapper>
  );
};

const TodoWrapper = styled.div`
  position: relative;
  padding: 12px;
  height: 90px;
  border: 1px solid rgb(221, 221, 221);
  border-radius: 12px;
  margin-bottom: 12px;
  box-sizing: border-box;

  #upper-div {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    #todo-title-text {
      font-size: 20px;
    }
  }

  #delete-button-area {
    position: absolute;
    right: 30px;
    top: 30px;
  }

  button {
    border: 1px solid rgb(238, 238, 238);
    background-color: rgb(255, 255, 255);
    border-radius: 8px;
    cursor: pointer;
    width: 30px;
    height: 30px;
  }
`;
