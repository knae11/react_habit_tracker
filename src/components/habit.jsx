import React, { Component } from "react";
import styles from "./habit.module.css";
class Habit extends Component {
  render() {
    const handleMinus = () => {
      this.props.handleMinus(habit);
    };
    const handlePlus = () => {
      this.props.handlePlus(habit);
    };
    const { habit } = this.props;
    return (
      <li className={styles.list}>
        <h3>{habit.title}</h3>
        <div className={styles.counter}>
          <h3 className={styles.count}>{habit.count}</h3>
          <button onClick={handlePlus}>+</button>
          <button onClick={handleMinus} className={styles.minus}>
            -
          </button>
        </div>
      </li>
    );
  }
}

export default Habit;
