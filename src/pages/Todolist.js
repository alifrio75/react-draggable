import React from "react";
import Todo from "../components/Todo";
import TodoStore from "../stores/TodoStore.js";
import * as TodoActions from "../actions/TodoActions";
import { Button } from "reactstrap";

export default class Todolist extends React.Component {
  constructor() {
    super();
    this.getTodos = this.getTodos.bind(this);
    this.state = {
      todos: TodoStore.getAll()
    };
  }

  componentWillMount() {
    TodoStore.on("change", this.getTodos);
  }

  componentWillUnmount() {
    TodoStore.removeListener("change", this.getTodos);
  }

  getTodos() {
    this.setState({
      todos: TodoStore.getAll()
    });
  }

  creatTodo() {
    TodoActions.createTodo(Date.now());
  }

  render() {
    const { todos } = this.state;
    console.log({ todos });
    const TodoComp = todos.map(todo => {
      return <Todo key={todo.id} {...todo} />;
    });
    console.log(TodoComp);

    return (
      <div>
        <h1>Add Modal</h1>
        <Button onClick={this.creatTodo.bind(this)}>Create!</Button>
        <ul>{TodoComp}</ul>
      </div>
    );
  }
}
