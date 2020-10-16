import React, { Component } from "react";
import styles from "./habit.module.css";
class Habit extends Component {
  handleMinus = () => {
    this.props.handleMinus(this.props.habit);
  };
  handlePlus = () => {
    this.props.handlePlus(this.props.habit);
  };
  handleDelete = () => {
    this.props.handleDelete(this.props.habit);
  };
  render() {
    const { habit } = this.props;
    return (
      <li className={styles.list}>
        <h3>{habit.title}</h3>
        <div className={styles.counter}>
          <h3 className={styles.count}>{habit.count}</h3>
          <button onClick={this.handlePlus}>+</button>
          <button onClick={this.handleMinus} className={styles.minus}>
            -
          </button>
          <button onClick={this.handleDelete}>Del</button>
        </div>
      </li>
    );
  }
}

export default Habit;
