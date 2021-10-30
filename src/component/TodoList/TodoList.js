import React from "react";
import "./todoList.css";
// import db from "../Firebase/firebase.config";
// import { setDoc, collection, getDocs } from "firebase/firestore/lite";

const TodoList = ({ text, id }) => {
  return (
    <div className="todoListStyle">
      <p style={{ marginTop: "7px" }}>{text}</p>
      <div className="features">
        <button className="featureStyle" style={{ marginRight: "2.5px" }}>
          <i class="far fa-trash-alt"></i>
        </button>
        <button
          className="featureStyle"
          style={{ marginLeft: "2.5px", backgroundColor: "darkkhaki" }}
        >
          <i class="far fa-edit"></i>
        </button>
      </div>
    </div>
  );
};

export default TodoList;
