import React, { useState } from "react";
import styled from "styled-components";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";

const FromControl = styled.div`
  margin: 0.5rem 0;

& label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

& input {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
  line-height: 1.5rem;
  padding: 0 0.25rem;
}

& input:focus {
  outline: none;
  background: #fad0ec;
  border-color: #8b005d;
}

&.invalid input {
  border-color:red;
  background: #ffd7d7;
}

&.invalid label {
  color: red;
}
`

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
    setIsValid(true);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length > 0) {
      props.onAddGoal(enteredValue);
    } else {
      setIsValid(false);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <FromControl className={`form-control ${!isValid ? "invalid" : ""}`}>
        <label>Course Goal</label>
        <input type="text" onChange={goalInputChangeHandler} />
      </FromControl>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
