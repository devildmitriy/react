import React from "react";
import TodoItem from "./TodoItem";

const TodoList = ({ data, onDelete, onComplete }) => {
  if (!data || data.length === 0) {
    return <h2>Список задач пуст</h2>;
  }

  return (
    <ul>
      {data.map((todo) => (
        <TodoItem
          key={todo.id}
          id={todo.id}
          title={todo.title}
          isComplete={todo.complete}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ))}
    </ul>
  );
};

export default TodoList;
