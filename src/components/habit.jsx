import React, { Component } from "react";
import styles from "./habit.module.css";
class Habit extends Component {
  render() {
    const { habit } = this.props;
    return (
      <li className={styles.list}>
        <h3>{habit.title}</h3>
        <h3 className={styles.count}>{habit.count}</h3>
      </li>
    );
  }
}

export default Habit;
