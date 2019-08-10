import React, { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import "../assets/css/TodoList.min.css";

export default class TodoList extends Component {
  state = {
    tasks: []
  };

  createTodo = newTodo => {
    this.setState({
      tasks: [...this.state.tasks, newTodo]
    });
  };

  removeTodo = id => {
    this.setState({ tasks: this.state.tasks.filter(todo => todo.id !== id) });
  };

  updateTodo = (id, updatedTask) => {
    const updateTodos = this.state.tasks.map(todo => {
      if (todo.id === id) {
        return { ...todo, task: updatedTask };
      } else {
        return todo;
      }
    });

    this.setState({ tasks: updateTodos });
  };

  updateCompletion = (id) => {
    const updateComplete = this.state.tasks.map(todo => {
      if (todo.id === id) {
        return { ...todo, isComplete: !todo.isComplete };
      } else {
        return todo;
      }
    });

    this.setState({ tasks: updateComplete });
  };

  render() {
    const todos = this.state.tasks.map(todo => {
      return (
        <Todo
          task={todo.task}
          key={todo.id}
          id={todo.id}
          removeTodo={this.removeTodo}
          update={this.updateTodo}
          isComplete = {todo.isComplete}
          updateCompletion={this.updateCompletion}
        />
      );
    });

    return (
      <div className="TodoList">
        <h1>Todo List<span>A simple react todo list</span></h1>
        <NewTodoForm create={this.createTodo} />
        <ul>{todos}</ul>
      </div>
    );
  }
}
