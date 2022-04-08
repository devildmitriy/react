import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css";

function AddUsers({ addUserHandler }) {
  const [inputsValue, setInputsValue] = useState({ userName: "", age: "" });
  const [error, setError] = useState();

  const userNameHandler = (event) => {
    setInputsValue((state) => ({ ...state, userName: event.target.value }));
  };

  const ageHandler = (event) => {
    setInputsValue((state) => ({ ...state, age: event.target.value }));
  };

  const submitrHandler = (event) => {
    event.preventDefault();
    if (
      inputsValue.age.trim().length === 0 ||
      inputsValue.userName.trim().length === 0
    ) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age(non-empty values).",
      });
      return;
    }
    if (+inputsValue.age < 1) {
        setError({
            title: "Invalid age",
            message: "Please enter a valid age",
          });
      return;
    }
    addUserHandler({
      userName: inputsValue.userName,
      age: inputsValue.age,
      id: new Date().toISOString(),
    });
    setInputsValue({ userName: "", age: "" });
  };

  const errorHandler = () => {
      setError(null)
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} modalHendler={errorHandler}/>}
      <Card className={classes.input}>
        <form onSubmit={submitrHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={inputsValue.userName}
            onChange={userNameHandler}
          />
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={inputsValue.age}
            onChange={ageHandler}
          />
          <Button type="submit">Add user</Button>
        </form>
      </Card>
    </div>
  );
}

export default AddUsers;
