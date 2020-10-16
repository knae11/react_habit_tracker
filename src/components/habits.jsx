import React, { Component } from "react";
import Habit from "./habit";
import InputForm from "./inputForm";
import styles from "./habits.module.css";
class Habits extends Component {
  render() {
    const handlePlus = (habit) => {
      this.props.handlePlus(habit);
    };
    const handleMinus = (habit) => {
      this.props.handleMinus(habit);
    };
    return (
      <>
        <InputForm />
        <ul className={styles.ul}>
          {this.props.habits.map((habit) => (
            <Habit
              handleMinus={handleMinus}
              handlePlus={handlePlus}
              key={habit.id}
              habit={habit}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default Habits;
