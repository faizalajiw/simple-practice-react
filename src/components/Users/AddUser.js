import React from "react";

import Card from "../UI/Card";
import classes from "./AddUser.modules.css";

const AddUser = (props) => {
  const addUserHandler = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
    <form onSubmit={addUserHandler}>
      <label htmlFor="username">Username</label>
      <input id="username" type="text" />
      <label htmlFor="age">Umur(Tahun)</label>
      <input id="age" type="number" />
      <button>Tambah</button>
    </form>
    </Card>
  );
};

export default AddUser;
