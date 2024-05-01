import "./style.css";
import App from "./application.js";
import createTodoHtmlElement from "./createTodoHtmlElement.js";
import createProjectHtmlElement from "./createProjectHtmlElement.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const todoApp = new App();

todoApp.addProject("Project One", "My First Project");

const addTodoDiv = document.querySelector(".new-todo-div");
const centerColumn = document.querySelector(".center");
const rightColumn = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

centerColumn.appendChild(createTodoHtmlElement("Todo Test", true, "19APR25"));

function toggleAddProject() {
  addTodoDiv.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr";
  centerColumn.style.display = "none";
  rightColumn.style.display = "none";
}

const addProjectButton = document.querySelector(".new-project-button-tab");

addProjectButton.addEventListener("click", addProject);
const addProjectTab = document.querySelector(".new-project-tab");
const addProjectForm = document.querySelector(".new-project-div");

function addProject() {
  addProjectTab.style.display = "none";
  addProjectForm.style.display = "grid";
}

const createProjectButton = document.querySelector(
  ".submit-project-button-form"
);
const closeProjectButton = document.querySelector(".close-project-button-form");
const addProjectDiscription = document.querySelector(
  ".project-discription-form"
);
const addProjectName = document.querySelector(".project-name-form");

createProjectButton.addEventListener("click", createProject);

closeProjectButton.addEventListener("click", closeProject);

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

const submitTodoButton = document.querySelector(".submit-todo");

const closeTodoButton = document.querySelector(".close-todo");

closeTodoButton.addEventListener("click", closeTodo);
submitTodoButton.addEventListener("click", submitTodo);

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

function removeAllProjectsDom() {
  const projectsNode = document.querySelectorAll(".project-refresh");
  projectsNode.forEach((element) => {
    element.remove();
  });
}

populateProjectsDom();
