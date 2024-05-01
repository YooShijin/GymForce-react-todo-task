import * as React from "react";
import { Checkbox } from "../checkbox";
import "./todo-list.scss";

export const TodoList = (props) => {
  const { todos, setTodos } = props;

  const handleDelete = (id) => {
    // Function to delete task
    setTodos((prev) => {
      return prev.filter((el) => el.id !== id);
    });
  };

  const toggleCheck = (id) => {
    setTodos((prev) => {
      return prev.map((el) => {
        if (el.id === id) {
          return { id: id, label: el.label, checked: !el.checked };
        } else {
          return el;
        }
      });
    });
  };

  const handleKeyUp = (e, id) => {
    if (e.keyCode === 13) {
      toggleCheck(id);
    }
  };

  return (
    <div className="todo-list">
      <span className="todo-list-title">Things to do:</span>
      {todos.length ? (
        <div className="todo-list-content">
          {todos.map((todoItem) => (
            <Checkbox
              className="todo-list-checkbox"
              key={todoItem.id}
              id={todoItem.id}
              label={todoItem.label}
              checked={todoItem.checked}
              onClick={(e) => toggleCheck(todoItem.id)}
              onKeyUp={(e) => handleKeyUp(e, todoItem.id)}
              onDelete={() => handleDelete(todoItem.id)}
            />
          ))}
        </div>
      ) : (
        <div className="no-todos">
          Looks like you&apos;re absolutely free today!
        </div>
      )}
    </div>
  );
};
