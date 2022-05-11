import { useState } from "react";
import useInput2 from "../hooks/use-input2";

const isEmpty = (value) => value.trim().length > 0;
const isEmail = (value) => value.includes("@");

const BasicForm = (props) => {
  const {
    value: enteredName,
    valueIsValid: enteredNameValid,
    hasError: enteredNameisInvalid,
    inputChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlur,
    reset: resetName,
  } = useInput2(isEmpty);

  const {
    value: enteredLastName,
    valueIsValid: enteredLastNameValid,
    hasError: enteredLastNameisInvalid,
    inputChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlur,
    reset: resetLastName,
  } = useInput2(isEmpty);

  const {
    value: enteredEmail,
    valueIsValid: enteredEmailValid,
    hasError: enteredEmailisInvalid,
    inputChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlur,
    reset: resetEmail,
  } = useInput2(isEmail);

  let formIsValid = false;
  if (enteredNameValid && enteredLastNameValid && enteredEmailValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    if (!enteredNameValid) {
      return;
    }

    resetName();
    resetLastName();
    resetEmail();
  };

  const formFirstNameClasses = !enteredNameisInvalid
    ? "form-control"
    : "form-control invalid";

  const formLastNameClasses = !enteredLastNameisInvalid
    ? "form-control"
    : "form-control invalid";
  const formEmailClasses = !enteredEmailisInvalid
    ? "form-control"
    : "form-control invalid";

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div className={formFirstNameClasses}>
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={enteredName}
            onChange={nameInputChangeHandler}
            onBlur={nameInputBlur}
          />
          {enteredNameisInvalid && (
            <p className="error-text">please entered correct first name</p>
          )}
        </div>
        <div className={formLastNameClasses}>
          <label htmlFor="name">Last Name</label>
          <input
            type="text"
            id="name"
            value={enteredLastName}
            onChange={lastNameInputChangeHandler}
            onBlur={lastNameInputBlur}
          />
          {enteredLastNameisInvalid && (
            <p className="error-text">please entered correct last name</p>
          )}
        </div>
      </div>
      <div className={formEmailClasses}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="text"
          id="name"
          value={enteredEmail}
          onChange={emailInputChangeHandler}
          onBlur={emailInputBlur}
        />
        {enteredEmailisInvalid && (
          <p className="error-text">please entered correct email</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
