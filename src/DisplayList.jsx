import React from "react";

export default class DisplayList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(items => {
          return (
            <li key={items}>
              {items}
              <a href="#" onClick={this.props.handleDelete.bind(null, items)}>
                [X]
              </a>
            </li>
          );
        })}
      </ul>
    );
  }
}
