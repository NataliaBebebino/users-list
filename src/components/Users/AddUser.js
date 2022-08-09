import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  /*
  In case you don't want to use array destructuring: 
  const ageUseState = useState("");
  const enteredAge = ageUseState[0];
  const setEnteredAge = ageUseState[1];
  */

  const addUserHandler = (event) => {
    event.preventDefault();

    // Here I make sure that both fields of the form are filled out
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }

    if (+enteredAge < 1) {
      // with the "+" +enteredAge I force the variable enteredAge to convert to a number because actually, it is a string
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (> 0).",
      });
      return;
    }

    props.onAddUser(enteredUsername, enteredAge); // with this line of code we forward the data to the App component upon every click.

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const errorHandler = () => {
    setError(null); // the idea is to set error to null/ undefined, so that it becomes a falsy value and then the ErrorModal is not displayed.
  }

  return (
    <div>
      {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>} {/*Remember that in this &&, if the first argument is truthy, then it returns the second argument. */}
      <Card className={classes.input}>
        {/* This className here is not coming from the usual attributes of the HTML tags because Card is a customized tag, it's our tag where we defined the className props */}
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />

          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />

          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
