import * as React from "react";
import "./todo-form.scss";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

export const TodoForm = (props) => {
  // const alertRef = React.useRef(null);
  const { todos, setTodos } = props;
  const [task, setTask] = React.useState("");
  const [showAlert, setShowAlert] = React.useState(false);
  const [content, setContent] = React.useState("");

  // Function to show the alert for one second
  const showAlertForOneSecond = () => {
    setShowAlert(true);

    // Hide the alert after one second
    setTimeout(() => {
      setShowAlert(false);
    }, 1000);
  };

  const handleAddTodo = (content) => {
    if (task) {
      setTodos((prev) => [
        ...prev,
        { label: task, id: Math.random().toString(), checked: false },
      ]);
      setTask("");

      setContent(
        <Alert
          variant="filled"
          severity="success"
          sx={{ width: "61%", margin: "auto" }}
        >
          Task added successfully!
        </Alert>
      );
      showAlertForOneSecond();
    } else {
      setContent(
        <Alert
          variant="filled"
          severity="error"
          sx={{ width: "61%", margin: "auto" }}
        >
          Please enter a task!
        </Alert>
      );
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
      {showAlert && content}
    </div>
  );
};
