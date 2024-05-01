import * as React from "react";
import "./todo-form.scss";
// {import Button from "@mui/material/Button";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");

  const handleAddTodo = () => {
    if (task) {
      setTodos((prev) => [
        ...prev,
        { label: task, id: Math.random().toString(), checked: false },
      ]);
      setTask("");
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyUp={handleKeyUp}
      />
      {/* //Changed the previous button with a custom button from material UI
      components
      <Button variant="contained" onClick={handleAddTodo}>
        Add task
      </Button> */}
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
    </div>
  );
};
