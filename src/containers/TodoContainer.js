import React, { Component } from "react";
import { TodoActions } from "store/actionCreators";
import { connect } from "react-redux";
import PageTemplate from "components/PateTemplate";
import TodoInput from "components/TodoInput";
import TodoList from "components/TodoList";

class TodoContainer extends Component {
  handleChange = e => {
    const { value } = e.target;
    TodoActions.change(value);
  };

  handleInsert = text => {
    if (text !== "" && text !== null) {
      TodoActions.insert(text);
      TodoActions.change("");
    }
  };

  handleToggle = id => {
    TodoActions.toggle(id);
  };

  handleRemove = id => {
    TodoActions.remove(id);
  };

  render() {
    const { input, todos } = this.props;
    const { handleChange, handleInsert, handleToggle, handleRemove } = this;
    return (
      <PageTemplate>
        <TodoInput
          value={input}
          onChange={handleChange}
          onInsert={handleInsert}
        />
        <TodoList
          todos={todos}
          onToggle={handleToggle}
          onRemove={handleRemove}
        />
      </PageTemplate>
    );
  }
}

export default connect(({ todo }) => ({
  input: todo.input,
  todos: todo.todoList
}))(TodoContainer);
