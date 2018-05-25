import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { render } from "react-dom";
import Todolist from "./pages/Todolist";

const app = document.getElementById("root");

//render(React.createElement(Layout), app);
render(<Todolist />, app);
