import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { FaGithub } from "react-icons/fa";
import "./navbar.scss";
export default function ResponsiveNavBar() {
  return (
    <Box sx={{ flexGrow: 1, width: "100vw", padding: "auto 5px" }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TODO
          </Typography>
          <a
            href="https://github.com/YooShijin/GymForce-react-todo-task"
            className="custom-link"
          >
            <Button color="inherit">
              <FaGithub className=" fill-[#3f3f46]   hover:fill-[#3f3f46]" />
              <span>GitHub</span>
            </Button>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
