import React, { Component } from "react";
import uuid from "uuid/v4";
import "../assets/css/NewTodoForm.min.css"

export default class NewTodoForm extends Component {
  state = {
    task: ""
  };

  handleChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.create({ ...this.state, id: uuid(), isComplete:false });
    this.setState({ task: "" });
  };

  render() {
    return (
      <form className="NewTodoForm" onSubmit={this.handleSubmit}>
        <label htmlFor="newTodo">New Todo</label>
        <input
          type="text"
          name="task"
          id="newTodo"
          value={this.state.task}
          placeholder="Add new Todo"
          onChange={this.handleChange}
          required
        />
        <button>Add Todo</button>
      </form>
    );
  }
}
