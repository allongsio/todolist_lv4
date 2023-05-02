| 기능                 | URL              | Method | request | response                                                                      |
| -------------------- | ---------------- | ------ | ------- | ----------------------------------------------------------------------------- |
| todo리스트 전체 조회 | /todos           | GET    |         | [{id:"아이디", name:"이름", title:"제목", content:"내용", isDone:"완수여부"}] |
| 개별 todo 조회       | /todos/${todoId} | GET    |         | {id:"아이디", name:"이름", title:"제목", content:"내용", isDone:"완수여부"}   |
| 개별 todo 추가       | /todos           | POST   |         | {id:"아이디", name:"이름", title:"제목", content:"내용", isDone:"완수여부"}   |
| 개별 todo 수정       | /todos/${todoId} | PATCH  |         | {id:"아이디", name:"이름", title:"제목", content:"내용", isDone:"완수여부"}   |
| 개별 todo 삭제       | /todos/${todoId} | DELETE |         | {}                                                                            |

---

**src > api > todos.js**

```javascript
//axios 요청이 들어가는 모든 모듈
import axios from "axios";

//데이터 조회부분
const getTodos = async () => {
  // const response = await axios.get(`${process.env.REACT_APP_SERVER_URL}/todos`);
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}/todos`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//개별 데이터 조회부분
const getTodo = async (todoId) => {
  try {
    const response = await axios.get(`http://localhost:4000/todos/${todoId}`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//데이터 추가부분
const addTodo = async (newTodo) => {
  try {
    const response = await axios.post("http://localhost:4000/todos", newTodo);

    // await axios.post(`${process.env.REACT_APP_SERVER_URL}/todos`, newTodo);
  } catch (error) {
    console.error(error);
  }
};

//데이터 삭제부분
const deleteTodo = async (todoId) => {
  try {
    const response = await axios.delete(
      `http://localhost:4000/todos/${todoId}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

//데이터 수정부분
const editTodo = async (todoId, editedTodo) => {
  try {
    const response = await axios.patch(
      `${process.env.REACT_APP_SERVER_URL}/todos/${todoId}`,
      editedTodo
    );
  } catch (error) {
    console.error(error);
  }
};

export { getTodos, addTodo, deleteTodo, editTodo };
```
