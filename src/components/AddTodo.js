import React from "react";
import { Link } from "react-router-dom/dist";
import { getTodos } from "../api/todos";
import { useQuery } from "react-query";
import Header from "./Header";

function AddTodo() {
  // const { isLoading, isError, data } = useQuery("todos", getTodos);
  // if (isLoading) {
  //   return <p>로딩중입니다....!</p>;
  // }
  // if (isError) {
  //   return <p>오류가 발생하였습니다...!</p>;
  // }
  // return (
  //   <>
  //     <div>무엇을 할까요?</div>
  //     <Link to="/Add">
  //       <button>할일기록하기</button>
  //     </Link>
  //   </>
  // );
}

export default AddTodo;
