import "./style.css";
import App from "./application.js";
import createTodoHtmlElement from "./createTodoHtmlElement.js";
import createProjectHtmlElement from "./createProjectHtmlElement.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const todoApp = new App();
const addTodoDiv = document.querySelector(".new-todo-div");
const centerColumn = document.querySelector(".center");
const rightColumn = document.querySelector(".right");
const bottom = document.querySelector(".bottom");
const addProjectTab = document.querySelector(".new-project-tab");
const addProjectForm = document.querySelector(".new-project-div");
const createProjectButton = document.querySelector(
  ".submit-project-button-form"
);
const closeProjectButton = document.querySelector(".close-project-button-form");
const addProjectDiscription = document.querySelector(
  ".project-discription-form"
);
const addProjectName = document.querySelector(".project-name-form");
const addProjectButton = document.querySelector(".new-project-button-tab");
const submitTodoButton = document.querySelector(".submit-todo");
const closeTodoButton = document.querySelector(".close-todo");

//Event listeners
createProjectButton.addEventListener("click", createProject);
closeProjectButton.addEventListener("click", closeProject);
addProjectButton.addEventListener("click", addProject);
closeTodoButton.addEventListener("click", closeTodo);
submitTodoButton.addEventListener("click", submitTodo);

todoApp.addProject("Project One", "My First Project");
todoApp.projects.projectOne.addTodo(
  "goodbye",
  "Terrible task",
  "15June",
  "Low",
  "notes are boring",
  false
);

todoApp.projects.projectOne.addTodo(
  "bye",
  "Amazing task",
  "15June",
  "Low",
  "notes are boring",
  false
);

todoApp.projects.projectOne.addTodo(
  "good",
  "task",
  "15June",
  "Low",
  "notes are boring",
  true
);

function toggleAddProject() {
  addTodoDiv.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr";
  centerColumn.style.display = "none";
  rightColumn.style.display = "none";
}

function addProject() {
  addProjectTab.style.display = "none";
  addProjectForm.style.display = "grid";
}

function createProject(e) {
  e.preventDefault();
  todoApp.addProject(addProjectName.value, addProjectDiscription.value);
  populateProjectsDom();
  addProjectTab.style.display = "flex";
  addProjectForm.style.display = "none";
}

function closeProject(e) {
  e.preventDefault();
  addProjectTab.style.display = "flex";
  addProjectForm.style.display = "none";
}

function submitTodo(e) {
  e.preventDefault();
  addTodoDiv.style.display = "none";
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
}

function closeTodo(e) {
  e.preventDefault();
  addTodoDiv.style.display = "none";
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
}

function addCreateNewTaskButton() {
  const addTask = document.querySelectorAll(".add-task");
  addTask.forEach((element) => {
    element.addEventListener("click", toggleAddProject);
  });
}

function removeAllProjectsDom() {
  const projectsNode = document.querySelectorAll(".project-refresh");
  projectsNode.forEach((element) => {
    element.remove();
  });
}

function removeAllTodosDom() {
  const todoNode = document.querySelectorAll(".todo");
  todoNode.forEach((element) => {
    element.remove();
  });
}

//function to create project in DOM
function populateProjectsDom() {
  const projectColumn = document.querySelector(".left");
  removeAllProjectsDom();
  let projects = Object.values(todoApp.projects);
  projects.forEach((project) => {
    projectColumn.appendChild(
      createProjectHtmlElement(project.name, project.discription)
    );
  });
  addCreateNewTaskButton();
}

centerColumn.appendChild(createTodoHtmlElement("Todo Test", true, "19APR25"));

populateProjectsDom();

function populateTodosDom(project) {
  const todoColumn = document.querySelector(".center");
  removeAllTodosDom();
  let todosArray = todoApp.projects[project].todos;
  todosArray.forEach((todo) => {
    todoColumn.appendChild(
      createTodoHtmlElement(todo.name, todo.completed, todo.dueDate)
    );
  });
}

//projectOne

populateTodosDom("projectOne");
