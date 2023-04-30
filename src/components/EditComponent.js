import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useMutation } from "react-query";
import { getTodos, editTodo } from "../api/todos";

function EditComponent() {
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  const params = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState("");
  const mutation = useMutation(editTodo, {
    onSuccess: () => {
      editTodo(detailData.id, editedTodo);
      navigate(`/Detail/${params.id}`);
    },
  });

  if (isLoading) {
    return <p>로딩중입니다...!</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }
  const detailData = data.filter((todo) => todo.id === params.id)[0];
  const editedTodo = { ...detailData, content };

  return (
    <EditWrapper>
      <div id='title'>{detailData.title}</div>
      <div id='content-area'>
        <textarea
          onChange={(e) => setContent(e.target.value)}
          value={content}
          id='content'
          name='body'
          rows='10'
          maxLength='200'
        ></textarea>
        <div id='button-area'>
          <button
            onClick={() => {
              mutation.mutate(detailData.id, editedTodo);
            }}
          >
            저장
          </button>
        </div>
      </div>
    </EditWrapper>
  );
}

export default EditComponent;

const EditWrapper = styled.div`
  #title {
    font-size: 32px;
    font-weight: 700;
  }

  #content-area {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 50px;
    min-height: 550px;

    #content {
      width: 100%;
      border: 1px solid rgb(238, 238, 238);
      padding: 12px;
      font-size: 14px;
    }
  }

  #button-area {
    width: 100%;
    gap: 12px;
    button {
      align-items: center;
      justify-content: center;
      border: 1px solid rgb(238, 238, 238);
      background-color: rgb(255, 255, 255);
      height: 46px;
      border-radius: 8px;
      cursor: pointer;
      width: 100%;
    }
  }
`;
