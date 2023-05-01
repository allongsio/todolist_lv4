import React from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "react-query";
import { useMutation } from "react-query";
import { getTodo, editTodo } from "../api/todos";
import useInput from "../hooks/useInput";

function EditComponent() {
  const params = useParams();
  const navigate = useNavigate();

  // 수정될 todo 내용 state로  관리
  // const [content, setContent] = useState("");
  const [content, onChangeContentHandler] = useInput();

  // 수정될 시에 호출할 api
  const mutation = useMutation(editTodo, {
    onSuccess: () => {
      editTodo(data.id, editedTodo);
      navigate(`/Detail/${params.id}`);
    },
  });

  // 비동기 데이터 통신
  const { isLoading, isError, data } = useQuery("todo", () =>
    getTodo(params.id)
  );
  if (isLoading) {
    return <p>로딩중입니다...!</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  // 수정된 내용을 포함한 객체 데이터
  const editedTodo = { ...data, content };

  return (
    <EditWrapper>
      <div id='title'>{data.title}</div>
      <div id='content-area'>
        <textarea
          onChange={onChangeContentHandler}
          value={content}
          id='content'
          name='body'
          rows='10'
          maxLength='200'
        ></textarea>
        <div id='button-area'>
          <button
            onClick={() => {
              mutation.mutate(data.id, editedTodo);
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
