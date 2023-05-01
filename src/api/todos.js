//axios 요청이 들어가는 모든 모듈
import axios from "axios";

//데이터 조회부분
const getTodos = async () => {
  // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  console.log(response);
  return response.data;
};

//개별 데이터 조회부분
const getTodo = async (todoId) => {
  const response = await axios.get(`http://localhost:4000/todos/${todoId}`);
  console.log(response);
  return response.data;
};

//데이터 추가부분
const addTodo = async (newTodo) => {
  const response = await axios.post("http://localhost:4000/todos", newTodo);
  // await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
  console.log(response);
};

//데이터 삭제부분
const deleteTodo = async (todoId) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/todos/${todoId}`
    );
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//데이터 수정부분
const editTodo = async (todoId, editedTodo) => {
  const response = await axios.patch(
    `${process.env.REACT_APP_SERVER_URL}/todos/${todoId}`,
    editedTodo
  );
  console.log(response);
};

export { getTodos, getTodo, addTodo, deleteTodo, editTodo };
