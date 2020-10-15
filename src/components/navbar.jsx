import React, { Component } from "react";
import styles from "./navbar.module.css";

class Navbar extends Component {
  render() {
    return (
      <header className={styles.header}>
        <h1>Habit tracker</h1>
        <h1 className={styles.count}>0</h1>
      </header>
    );
  }
}

export default Navbar;
