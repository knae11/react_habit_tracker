import React, { Component } from "react";
import Habits from "./components/habits";
import Navbar from "./components/navbar";
import InputForm from "./components/inputForm";
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
  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item !== habit);
    this.setState({ habits });
  };

  handleAdd = (item) => {
    const habits = [
      ...this.state.habits,
      { id: Date.now(), title: item, count: 0 },
    ];
    this.setState({ habits });
  };
  handleReset = () => {
    const habits = this.state.habits.map((item) => {
      if (item.count !== 0) {
        return { ...item, count: 0 };
      }
      return item;
    });
    this.setState({ habits });
  };
  render() {
    return (
      <section className={styles.section}>
        <Navbar
          navCount={this.state.habits.filter((item) => item.count > 0).length}
        />
        <InputForm handleSubmit={this.handleAdd} />
        <Habits
          handleMinus={this.handleMinus}
          handlePlus={this.handlePlus}
          handleDelete={this.handleDelete}
          habits={this.state.habits}
        />
        <button onClick={this.handleReset}>Reset</button>
      </section>
    );
  }
}

export default App;
