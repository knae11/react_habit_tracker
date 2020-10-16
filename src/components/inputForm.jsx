import React, { Component } from "react";
import styles from "./inputForm.module.css";
class InputForm extends Component {
  onSubmit(event) {
    event.preventDefault();
    console.log("submitted");
  }
  render() {
    return (
      <form className={styles.form} onSubmit={this.onSubmit}>
        <input
          className={styles.input}
          type="text"
          placeholder="add something new :-) "
        ></input>
        <button className={styles.button}>ADD</button>
      </form>
    );
  }
}

export default InputForm;
