import * as React from "react";
import "./todo-results.scss";

export const TodoResults = (props) => {
  const { todos } = props;

  const calculateChecked = () => {
    let count = 0;
    if (todos.length === 0) {
      return "(no todos available)";
    }
    todos.forEach((todo) => {
      if (todo.checked) {
        count++;
      }
    });
    return count;
  };

  return <div className="todo-results">Done:- {calculateChecked()}</div>;
};
