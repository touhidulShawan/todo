import React, { Component } from "react";
import "../assets/scss/Todo.scss";

export default class Todo extends Component {
  state = {
    isEditing: false,
    isComplete: false,
    task: this.props.task,
  };

  handleRemove = () => {
    this.props.removeTodo(this.props.id);
  };

  toggleForm = () => {
    this.setState({
      isEditing: !this.state.isEditing,
    });
  };

  handleChange = (evt) => {
    this.setState({ task: evt.target.value });
  };

  handleSubmit = (evt) => {
    evt.preventDefault();
    this.props.update(this.props.id, this.state.task);
    this.setState({
      isEditing: false,
    });
  };

  toggleCompletion = () => {
    this.props.updateCompletion(this.props.id);
  };

  render() {
    let result;

    if (this.state.isEditing) {
      result = (
        <div>
          <form className="Todo-form" onSubmit={this.handleSubmit}>
            <input
              type="text"
              value={this.state.task}
              onChange={this.handleChange}
            />
            <button>Save</button>
          </form>
        </div>
      );
    } else {
      result = (
        <div className="Todo">
          <li
            className={this.props.isComplete ? "Todo-complete" : ""}
            onClick={this.toggleCompletion}
          >
            {this.props.task}
          </li>
          <div>
            <button className="Todo-edit" onClick={this.toggleForm}>
              Edit
            </button>
            <button className="Todo-delete" onClick={this.handleRemove}>
              X
            </button>
          </div>
        </div>
      );
    }
    return result;
  }
}
