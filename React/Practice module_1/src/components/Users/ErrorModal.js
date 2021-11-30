import React from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./ErrorModal.module.css";
const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer style={{marginBottom:10}}>
          <center><Button onClick={props.onConfirm}>Okay</Button></center>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;
