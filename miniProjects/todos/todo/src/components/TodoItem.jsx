import React from "react";

const TodoItem = ({ title, isComplete, id, onDelete, onComplete }) => {
  const onClickHandler = () => {
    onDelete(id);
  };

  const onCompleteHandler = () => {
    onComplete(id);
  };
  return (
    <li>
      <span
        style={{ textDecoration: isComplete ? "line-through" : "" }}
        onClick={onCompleteHandler}
      >
        {title}
      </span>
      <button onClick={onClickHandler}>X</button>
    </li>
  );
};

export default TodoItem;
