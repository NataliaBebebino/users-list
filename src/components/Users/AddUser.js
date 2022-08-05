import React from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

const AddUser = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}> {/* This className here is not coming from the usual attributes of the HTML tags because Card is a customized tag, it's our tag where we defined the className props */}
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />

        <label htmlFor="age">Age (Years)</label>
        <input id="age" type="number" />

        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
