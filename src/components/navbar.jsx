import React, { PureComponent } from "react";
import styles from "./navbar.module.css";

class Navbar extends PureComponent {
  render() {
    console.log("header");
    return (
      <header className={styles.header}>
        <h1>Habit tracker</h1>
        <h1 className={styles.count}>{this.props.navCount}</h1>
      </header>
    );
  }
}

export default Navbar;
