import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import styles from "./app.module.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      habits: [
        { id: 1, title: "Practice react class", count: 0 },
        { id: 2, title: "Eat something delicious", count: 0 },
        { id: 3, title: "Work out for health", count: 0 },
      ],
    };
  }
  handleMinus = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count > 0 ? habit.count - 1 : 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  handlePlus = (habit) => {
    const habits = this.state.habits.map((item) => {
      if (item.id === habit.id) {
        return { ...habit, count: habit.count + 1 };
      }
      return item;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <section className={styles.section}>
        <Navbar />
        <Habits
          handleMinus={this.handleMinus}
          handlePlus={this.handlePlus}
          habits={this.state.habits}
        />
      </section>
    );
  }
}

export default App;
