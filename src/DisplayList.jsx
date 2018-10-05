import React from "react";
import DisplayItem from "./DisplayItem";

export default class DisplayList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.todos.map((todos, i) => {
          return (
            <DisplayItem
              key={todos}
              todos={todos}
              handleDelete={this.props.handleDelete.bind(null, todos)}
            />
          );
        })}
      </ul>
    );
  }
}
