import React from "react";

export default class DisplayItem extends React.Component {
  constructor() {
    super();
    this.state = { editing: false };
  }

  // componentDidMount() {
  //   this.setState({ changedText: this.props.todos.title });
  // }

  handleEditing(event) {
    this.setState({ editing: true, changedText: this.props.todos.title });
  }
  handleEditingDone(event) {
    //console.log("editing is done");
    if (event.KeyCode === 13) {
      this.setState({ editing: false });
    }
  }
  handleEditingChange(event) {
    let _changeText = event.target.value;
    this.setState({ changedText: _changeText });
  }

  render() {
    var todos = this.props.todos;
    let ViewStyle = {};
    let editStyle = {};

    if (this.state.editing) {
      ViewStyle.display = "none";
    } else {
      editStyle.display = "none";
    }

    return (
      <li>
        <div style={ViewStyle} onDoubleClick={this.handleEditing.bind(this)}>
          <input
            // checked={this.state.done}
            // onChange={this.props.handleDone.bind(this)}
            type="checkbox"
            style={{ fontSize: "x-large" }}
          />

          {todos}
          {/* {this.state.changedText} */}
          <a href="#" onClick={this.props.handleDelete.bind(null, todos)}>
            [x]
          </a>
        </div>

        <input
          onKeyDown={this.handleEditingDone.bind(this)}
          onChange={this.handleEditingChange.bind(this)}
          style={editStyle}
          value={this.state.changedText}
        />
      </li>
    );
  }
}
// DisplayItem.propTypes = {
//   todos: React.propTypes.object.isRequired
// };
