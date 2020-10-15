import React, { Component } from "react";
import Habit from "./habit";
import InputForm from "./inputForm";
import styles from "./habits.module.css";
class Habits extends Component {
  render() {
    return (
      <>
        <InputForm />
        <ul className={styles.ul}>
          {this.props.habits.map((habit) => (
            <Habit key={habit.id} habit={habit} />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
