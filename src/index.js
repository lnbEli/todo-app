import "./style.css";
import App from "./application.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

console.log(format(new Date(), "'Today is a' eeee"));
//=> "Today is a Wednesday"

const todoApp = new App();

todoApp.addProject("project one", "my first project");

todoApp.projects.default.addTodo(
  "hello",
  "REally cool task",
  "15FEB",
  "Medium"
);

todoApp.projects.default.addTodo("goodbye", "Terrible task", "15June", "Low");
todoApp.projects.default.addTodo("greattt", "Terrible task", "15June", "Low");

todoApp.projects.projectOne.addTodo(
  "goodbye",
  "Terrible task",
  "15June",
  "Low"
);

todoApp.addProject("Project two", "the coolest project");
todoApp.addProject("Project three", "the worst project");

console.log(todoApp);
