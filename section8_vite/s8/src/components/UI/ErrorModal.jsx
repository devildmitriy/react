import React from "react";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

function ErrorModal(props) {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.modalHendler}></div>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.modalHendler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
