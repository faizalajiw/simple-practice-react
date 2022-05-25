import React, { useState } from "react";

import classes from "./AddUser.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    // jika ada whitespace, maka tidak akan diinputkan ke dalam database
    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Username Salah",
        message: "Silahkan masukkan Username yang benar",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Umur Salah",
        message: "Silahkan masukkan Umur yang benar",
      });
      return;
    }

    props.onAddUser(username, age);
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

  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={username}
            onChange={usernameChangedHandler}
          />
          <label htmlFor="age">Umur (Tahun)</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={ageChangedHandler}
          />
          <Button type="submit">Tambah</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
