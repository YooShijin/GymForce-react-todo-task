import * as React from "react";
import "./todo-form.scss";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export const TodoForm = (props) => {
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);

  // Function to show the alert for one second
  const showAlertForOneSecond = () => {
    setShowAlert(true);

    // Hide the alert after one second
    setTimeout(() => {
      setShowAlert(false);
    }, 1000); // 1000 milliseconds = 1 second
  };

  const handleAddTodo = () => {
    if (task) {
      setTodos((prev) => [
        ...prev,
        { label: task, id: Math.random().toString(), checked: false },
      ]);
      setTask("");
      showAlertForOneSecond();
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="container">
      <div className="todo-form">
        <input
          placeholder="Enter new task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          onKeyUp={handleKeyUp}
        />
        {/* //Changed the previous button with a custom button from material UI
      components */}
        <Button variant="contained" onClick={handleAddTodo}>
          Add task
        </Button>
        {/* <button type="button" onClick={handleAddTodo}>
        Add task
      </button> */}
      </div>
      {showAlert && (
        <Alert
          variant="filled"
          severity="success"
          sx={{ width: "61%", margin: "auto" }}
        >
          Task added successfully!
        </Alert>
      )}
    </div>
  );
};
