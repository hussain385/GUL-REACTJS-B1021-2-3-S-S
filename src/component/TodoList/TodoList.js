import React, { useState } from "react";
import "./todoList.css";
import db from "../Firebase/firebase.config";
import { doc, deleteDoc, updateDoc } from "firebase/firestore/lite";

const TodoList = ({ text, id }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [editTodo, setEditTodo] = useState("");
  const delTodo = async () => {
    await deleteDoc(doc(db, "todos", id)).then(() => {
      alert("Your File Has Successfully Delete");
      window.location.reload();
    });
  };

  const editTodoFunction = async () => {
    await updateDoc(doc(db, "todos", id), {
      todo: editTodo,
    }).then(() => {
      alert("Your Todo Has Successfully Updated");
      window.location.reload();
    });
  };
  return (
    <>
      <div className="todoListStyle">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ marginTop: "7px" }}>{text}</p>
          <div className="features">
            <button
              onClick={delTodo}
              className="featureStyle"
              style={{ marginRight: "2.5px" }}
            >
              <i className="far fa-trash-alt"></i>
            </button>
            <button
              onClick={() => {
                setShowEdit(!showEdit);
                setEditTodo(text);
              }}
              className="featureStyle"
              style={{ marginLeft: "2.5px", backgroundColor: "darkkhaki" }}
            >
              <i className="far fa-edit"></i>
            </button>
          </div>
        </div>
        {showEdit && (
          <div style={{ flexDirection: "row"}}>
            <input
              value={editTodo}
              onChange={({ target }) => {
                setEditTodo(target.value);
              }}
              placeholder="Enter Your Todo"
              className="inputStyle1"
            />
            <button class="editStyle" onClick={editTodoFunction}>
              <i class="fas fa-check"></i>
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TodoList;
