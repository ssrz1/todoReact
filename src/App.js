import React from "react";
import DisplayList from "./DisplayList";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = { title: "", todos: ["eggs", "banana", "bread"] };
  }

  handleDelete(titleToBeDeleted) {
    console.log(titleToBeDeleted);
    var newtodos = this.state.todos.filter(_title => {
      return _title !== titleToBeDeleted;
    });

    this.setState({ todos: newtodos });
  }

  handleSubmit(event) {
    event.preventDefault();
    console.log("form was submitted");

    var title = this.state.title;
    var newtodos = this.state.todos.concat(title);

    console.log("submitted form has value ", title);
    this.setState({ title: "", todos: newtodos });
  }

  handleChange(event) {
    var title = event.target.value;
    console.log(title);
    this.setState({ title: title });
  }

  render() {
    return (
      <div>
        <p> TODO </p>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input
            onChange={this.handleChange.bind(this)}
            value={this.state.title}
          />
          <button> Submit </button>
        </form>

        <p>Number of total tasks: {this.state.todos.length}</p>
        {/* <p>
          Number of total tasks done:{" "}
          {this.state.items.filter(item => {}).length}
        </p> */}

        <DisplayList
          handleDelete={this.handleDelete.bind(this)}
          todos={this.state.todos}
        />
      </div>
    );
  }
}
