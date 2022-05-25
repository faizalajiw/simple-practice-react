import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const addUserHandler = (event) => {
    event.preventDefault();
    // jika ada whitespace, maka tidak akan diinputkan ke dalam database
    if (username.trim().length === 0 || age.trim().length === 0) {
      return;
    }

    if (+username < 1) {
      return;
    }

    console.log(username, age);
    // set clear input fields
    setUsername("");
    setAge("");
  };

  const usernameChangedHandler = (event) => {
    setUsername(event.target.value);
  };

  const ageChangedHandler = (event) => {
    setAge(event.target.value);
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          value={username}
          onChange={usernameChangedHandler}
        />
        <label htmlFor="age">Umur(Tahun)</label>
        <input
          id="age"
          type="number"
          value={age}
          onChange={ageChangedHandler}
        />
        <Button type="submit">Tambah</Button>
      </form>
    </Card>
  );
};

export default AddUser;
