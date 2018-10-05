import React from "react";

export default class DisplayItem extends React.Component {
  constructor() {
    super();
    this.state = { done: false };
  }

  handleDone(event) {
    var _done = !this.state.done;
    this.setState({ done: _done });
  }

  render() {
    var todos = this.props.todos;

    return (
      <li>
        <input
          checked={this.state.done}
          onChange={this.handleDone.bind(this)}
          type="checkbox"
          style={{ fontSize: "x-large" }}
        />

        {todos}
        <a href="#" onClick={this.props.handleDelete.bind(null, todos)}>
          [x]
        </a>
      </li>
    );
  }
}
