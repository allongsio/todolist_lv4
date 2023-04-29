//axios 요청이 들어가는 모든 모듈
import axios from "axios";

//데이터 조회부분
const getTodos = async () => {
  // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  const response = await axios.get("http://localhost:4000/todos");

  // console.log(response.data);
  return response.data;
};

//데이터 추가부분
const addTodo = async (newTodo) => {
  await axios.post("http://localhost:4000/todos", newTodo);
  // await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
};

//데이터 삭제부분
const deleteTodo = async (todoId) => {
  const response = await axios.delete(`http://localhost:4000/todos/${todoId}`, {
    method: "DELETE",
  });

  return response.data;
};

export { getTodos, addTodo, deleteTodo };
