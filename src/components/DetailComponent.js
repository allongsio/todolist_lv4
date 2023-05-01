import React from "react";
import { getTodo } from "../api/todos";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";

function DetailComponent() {
  const params = useParams();
  const navigate = useNavigate();
  // React - Query 비동기 데이터 관리
  const { isLoading, isError, data } = useQuery("todo", () =>
    getTodo(params.id)
  );
  if (isLoading) {
    return <p>로딩중입니다...!</p>;
  }
  if (isError) {
    return <p>오류가 발생하였습니다...!</p>;
  }

  return (
    <DetaileComponentWrapper>
      <div id='id-and-previous'>
        <div>id: (${params.id})</div>
        <div id='previous' onClick={() => navigate("/TodoList")}>
          이전으로
        </div>
      </div>
      <div id='title'>{data.title}</div>
      <div>
        <div id='content-text'>{data.content}</div>
        <div>
          <button
            onClick={() => navigate(`/Edit/${params.id}`)}
            id='edit-button'
          >
            수정
          </button>
        </div>
      </div>
      <div id='reply-area'>
        <div id='reply'>눌러서 댓글보기</div>
      </div>
    </DetaileComponentWrapper>
  );
}

export default DetailComponent;

const DetaileComponentWrapper = styled.div`
  padding: 24px;

  #id-and-previous {
    display: flex;
    justify-content: space-between;
    margin-bottom: 32px;

    div {
      font-size: 24px;
    }

    #previous {
      color: teal;
      cursor: pointer;
    }
  }

  #title {
    font-size: 32px;
    font-weight: 700;
  }

  #content-text {
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    margin-top: 50px;
    min-height: 450px;
    font-size: 18px;
  }

  #edit-button {
    border: 1px solid rgb(238, 238, 238);
    background-color: white;
    height: 46px;
    border-radius: 8px;
    cursor: pointer;
    width: 100%;
  }

  #reply-area {
    height: 50px;
    bottom: 0px;
    left: 0px;
    width: 100%;
    border-top: 1px solid rgb(238, 238, 238);
    margin-top: 20px;
  }

  #reply {
    font-size: 16px;
  }
`;
