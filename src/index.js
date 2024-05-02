import "./style.css";
import App from "./application.js";
import createTodoHtmlElement from "./createTodoHtmlElement.js";
import createProjectHtmlElement from "./createProjectHtmlElement.js";
import createTodoDetailedHtmlElement from "./createTodoDetailedHtmlElement.js";
import createTodoFormHtmlElement from "./createTodoFormHtmlElement.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const todoApp = new App();

const centerColumn = document.querySelector(".center");
const rightColumn = document.querySelector(".right");
const bottom = document.querySelector(".bottom");
const addProjectTab = document.querySelector(".new-project-tab");
const addProjectForm = document.querySelector(".new-project-div");
const createProjectButton = document.querySelector(
  ".submit-project-button-form"
);
const closeProjectButton = document.querySelector(".close-project-button-form");
const addProjectDescription = document.querySelector(
  ".project-description-form"
);
const addProjectName = document.querySelector(".project-name-form");
const addProjectButton = document.querySelector(".new-project-button-tab");

//Event listeners
createProjectButton.addEventListener("click", createProject);
closeProjectButton.addEventListener("click", closeProject);
addProjectButton.addEventListener("click", addProject);

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

rightColumn.appendChild(
  createTodoDetailedHtmlElement(
    "Todo One",
    "Must Finish Todo App",
    "2018-07-22",
    "high",
    `The best way to compete this is by getting my head down and
      really focusing. Take breaks and spread love. You will have to
      work hard but it will be worth it`,
    false
  )
);

function openAddTodoForm() {
  bottom.appendChild(createTodoFormHtmlElement());
  addEventListenerToTodoFormButtons();
  bottom.style.gridTemplateColumns = "1fr 1fr";
  centerColumn.style.display = "none";
  rightColumn.style.display = "none";
}

function addEventListenerToTodoFormButtons() {
  const submitTodoButton = document.querySelector(".submit-todo");
  const closeTodoButton = document.querySelector(".close-todo");
  closeTodoButton.addEventListener("click", closeTodo);
  submitTodoButton.addEventListener("click", submitTodo);
}

function submitTodo(e) {
  e.preventDefault();
  const todoFormElement = document.querySelector(".new-todo-div");
  todoFormElement.remove();
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
}

function closeTodo(e) {
  e.preventDefault();
  const todoFormElement = document.querySelector(".new-todo-div");
  todoFormElement.remove();
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
}

function addProject() {
  addProjectTab.style.display = "none";
  addProjectForm.style.display = "grid";
}

function createProject(e) {
  e.preventDefault();
  todoApp.addProject(addProjectName.value, addProjectDescription.value);
  populateProjectsDom();
  addProjectTab.style.display = "flex";
  addProjectForm.style.display = "none";
}

function closeProject(e) {
  e.preventDefault();
  addProjectTab.style.display = "flex";
  addProjectForm.style.display = "none";
}

function addEventListenerToAddTodoButtons() {
  const addTodo = document.querySelectorAll(".add-todo");
  addTodo.forEach((element) => {
    element.addEventListener("click", openAddTodoForm);
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
      createProjectHtmlElement(project.name, project.description)
    );
  });
  addEventListenerToAddTodoButtons();
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
