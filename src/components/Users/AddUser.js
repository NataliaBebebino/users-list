import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";

const AddUser = () => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
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
      return;
    }

    if (+enteredAge < 1) { // with the "+" +enteredAge I force the variable enteredAge to convert to a number because actually, it is a string
      return;
    }

    //console.log(enteredUsername, enteredAge);

    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  }

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  }

  return (
    <Card className={classes.input}> {/* This className here is not coming from the usual attributes of the HTML tags because Card is a customized tag, it's our tag where we defined the className props */}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" value={enteredUsername} onChange={usernameChangeHandler}/>

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" value={enteredAge} onChange={ageChangeHandler}/>

        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
