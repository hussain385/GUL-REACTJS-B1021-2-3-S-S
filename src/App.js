import React, { useState, useEffect } from "react";
import "./App.css";
import TodoList from "./component/TodoList/TodoList";
import db from "./component/Firebase/firebase.config";
import { addDoc, collection, getDocs } from "firebase/firestore/lite";

function App() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  const todoData = collection(db, "todos");
  useEffect(() => {
    async function fetchData() {
      const todoSnapshot = await getDocs(todoData);
      const todoList = todoSnapshot.docs.map((doc) => [doc.data(), doc.id]);
      setTodos(todoList);
      console.log(todoList);
    }
    fetchData();
  }, []);

  const onTodoSubmit = async (newTodo) => {
    await addDoc(todoData, {
      todo: newTodo,
    }).then(() => {
      setTodos([
        ...todos,
        [
          {
            todo: newTodo,
          },
          "knscwdascsc",
        ],
      ]);
      setNewTodo("");
    });
  };

  return (
    <div className="App">
      <div className="container">
        <h1>Todo App</h1>
        <div>
          <input
            value={newTodo}
            onChange={(data) => {
              setNewTodo(data.target.value);
            }}
            placeholder="Add Your Todo"
            className="inputStyle"
          />
          <button
            onClick={() => {
              onTodoSubmit(newTodo);
            }}
            className="buttonStyle"
          >
            Add
          </button>
        </div>
        <div
          style={{
            overflow: "scroll",
            marginInline: "50px",
            height: "70%",
            borderRadius: "10px",
            marginTop: "10px",
            overflowX: 'hidden',
          }}
        >
          {todos &&
            todos.map((value) => (
              <TodoList text={value[0].todo} id={value[1]} />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
