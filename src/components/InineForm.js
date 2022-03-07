import React, { useRef } from "react";
import { Button, TextField } from "@material-ui/core";
import useStyles from "./InlineFormStyle";

const InlineTextField = (props) => {
  const { rowData } = props;
  const classes = useStyles();
  const inputRef = useRef();

  const submitChangeHandler = (event) => {
    event.preventDefault();

    const newEmail = inputRef.current.value;
    if (newEmail.length >= 0) {
      //   // Call API
      console.log({ newEmail, rowData });
    }
  };

  return (
    <form onSubmit={submitChangeHandler} className="flex align-center">
      <TextField
        className={classes.textfield}
        variant="outlined"
        label="New Email"
        inputRef={inputRef}
      />
      <Button variant="contained" className={classes.button} type="submit">
        Change
      </Button>
    </form>
  );
};

export default InlineTextField;
