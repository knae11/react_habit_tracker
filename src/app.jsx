import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import styles from "./app.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 1, title: "practice react class", count: 0 },
        { id: 2, title: "eat something delicious", count: 0 },
        { id: 3, title: "work out for health", count: 0 },
      ],
    };
  }
  render() {
    return (
      <section className={styles.section}>
        <Navbar />
        <Habits habits={this.state.habits} />
      </section>
    );
  }
}

export default App;
