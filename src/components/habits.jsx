import React, { Component } from "react";
import Habit from "./habit";
import styles from "./habits.module.css";
class Habits extends Component {
  handlePlus = (habit) => {
    this.props.handlePlus(habit);
  };
  handleMinus = (habit) => {
    this.props.handleMinus(habit);
  };
  handleDelete = (habit) => {
    this.props.handleDelete(habit);
  };
  render() {
    return (
      <>
        <ul className={styles.ul}>
          {this.props.habits.map((habit) => (
            <Habit
              handleMinus={this.handleMinus}
              handlePlus={this.handlePlus}
              handleDelete={this.handleDelete}
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
