import React from "react";
import ReactDOM from "react-dom";
import classes from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.modalHendler}></div>;
};

const ModalOverlay = (props) => {
  return <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.message}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.modalHendler}>Okay</Button>
    </footer>
  </Card>;
};

function ErrorModal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop modalHendler={props.modalHendler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          modalHendler={props.modalHendler}
          title={props.title}
          message={props.message}
        />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ErrorModal;
