import React, { Component } from "react";
import CounterItem from "./CounterItem";

class Counters extends Component {
  state = {
    counters: [
      {
        id: 1,
        title: "React",
      },
      {
        id: 2,
        title: "Angular",
      },
      {
        id: 3,
        title: "Vue",
      },
    ],
    CounterItem: "",
  };

  handleChange = (e) => {
    this.setState({ CounterItem: e.target.value });
  };
  handleClick = () => {
    const counters = [...this.state.counters];
    const id = counters.length ? counters[counters.length - 1].id + 1 : 1;
    counters.push({ id, title: this.state.CounterItem });
    this.setState({ counters });
  };

  handleDelete = (id) => {
    const counters = [...this.state.counters];
    const counter = counters.filter((counter) => counter.id !== id);

    this.setState({ counters: counter });
  };

  handleUpdate = (text, id) => {
    const counters = [...this.state.counters];
    counters.map((counter) => {
      if (counter.id === id) {
        counter.title = text;
      }
    });
    this.setState(counters);
  };

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <input
          type="text"
          name="title"
          style={{ margin: "3rem" }}
          value={this.state.CounterItem}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>Submit</button>
        {this.state.counters.map((counter) => (
          <CounterItem
            key={counter.id}
            title={counter.title}
            id={counter.id}
            handleDelete={this.handleDelete}
            handleUpdate={this.handleUpdate}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
