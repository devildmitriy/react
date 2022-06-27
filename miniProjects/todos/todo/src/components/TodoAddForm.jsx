import React from "react";
import { useState } from "react";

const TodoAddForm = ({ addTodo }) => {
  const [todoTitle, setTodoTitle] = useState("");
  const onChangeHandler = (event) => {
    setTodoTitle(event.target.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (todoTitle.trim().length > 0) {
      addTodo(todoTitle.trim(), new Date().toISOString());
      setTodoTitle("");
    }
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="newTodo">Новая задача:</label>
      <input type="text" value={todoTitle} onChange={onChangeHandler} />
      <button disabled={todoTitle.trim().length === 0}>Добавить</button>
    </form>
  );
};

export default TodoAddForm;
