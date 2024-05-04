import "./style.css";
import App from "./application.js";
import createTodoHtmlElement from "./createTodoHtmlElement.js";
import createProjectHtmlElement from "./createProjectHtmlElement.js";
import createTodoDetailedHtmlElement from "./createTodoDetailedHtmlElement.js";
import createTodoFormHtmlElement from "./createTodoFormHtmlElement.js";
import createProjectFormHtmlElement from "./createProjectFormHtmlElement.js";
import createProjectTabHtmlElement from "./createProjectTabHtmlElement.js";
import sampleProjectsData from "./sampleProjectsData.js";
import toCamelCase from "./toCamelCase.js";
import { format, formatDistance, formatRelative, subDays } from "date-fns";

const todoApp = new App();
const leftColumn = document.querySelector(".left");
const centerColumn = document.querySelector(".center");
const rightColumn = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

//start up
function init() {
  sampleProjectsData(todoApp);
  leftColumn.appendChild(createProjectTabHtmlElement());
  addEventListenerAddProjectButton();
  populateProjectsDom();
  populateTodosDom("defaultProject");
  rightColumn.appendChild(
    createTodoDetailedHtmlElement(
      todoApp.projects.projectOne.todos[0].name,
      todoApp.projects.projectOne.todos[0].description,
      todoApp.projects.projectOne.todos[0].dueDate,
      todoApp.projects.projectOne.todos[0].priority,
      todoApp.projects.projectOne.todos[0].notes,
      todoApp.projects.projectOne.todos[0].completed
    )
  );
}
init();

function openAddTodoForm() {
  bottom.appendChild(createTodoFormHtmlElement());
  addEventListenerToTodoFormButtons();
  bottom.style.gridTemplateColumns = "1fr 1fr";
  centerColumn.style.display = "none";
  rightColumn.style.display = "none";
  disableAddTodoButtons();
}

function submitTodo(e) {
  e.preventDefault();
  const todoFormElement = document.querySelector(".new-todo-div");
  todoFormElement.remove();
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
  enableAddTodoButtons();
}

function closeTodo(e) {
  e.preventDefault();
  const todoFormElement = document.querySelector(".new-todo-div");
  todoFormElement.remove();
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
  enableAddTodoButtons();
}

function addProject() {
  const addProjectTab = document.querySelector(".new-project-tab");
  addProjectTab.remove();
  leftColumn.prepend(createProjectFormHtmlElement());
  addEventListenerNewProjectButtons();
}

function createProject(e) {
  e.preventDefault();
  const addProjectName = document.querySelector(".project-name-form");
  const addProjectDescription = document.querySelector(
    ".project-description-form"
  );
  todoApp.addProject(addProjectName.value, addProjectDescription.value);
  addProjectName.value = "";
  addProjectDescription.value = "";
  populateProjectsDom();
  closeProject();
}

function closeProject() {
  const addProjectForm = document.querySelector(".new-project-div");
  addProjectForm.remove();
  leftColumn.prepend(createProjectTabHtmlElement());
  addEventListenerAddProjectButton();
}

//Add EventListeners to buttons functions
function addEventListenerToTodoFormButtons() {
  const submitTodoButton = document.querySelector(".submit-todo");
  const closeTodoButton = document.querySelector(".close-todo");
  closeTodoButton.addEventListener("click", closeTodo);
  submitTodoButton.addEventListener("click", submitTodo);
}

function addEventListenerToAddTodoButtons() {
  const addTodoButton = document.querySelectorAll(".add-pointer");
  addTodoButton.forEach((element) => {
    element.addEventListener("click", openAddTodoForm);
  });
}

function addEventListenerNewProjectButtons() {
  const createProjectButton = document.querySelector(
    ".submit-project-button-form"
  );
  const closeProjectButton = document.querySelector(
    ".close-project-button-form"
  );
  createProjectButton.addEventListener("click", createProject);
  closeProjectButton.addEventListener("click", closeProject);
}

function addEventListenerAddProjectButton() {
  const addProjectButton = document.querySelector(".new-project-button-tab");
  addProjectButton.addEventListener("click", addProject);
}

function addEventListenerPopulateProjectTodos() {
  const projectsDom = document.querySelectorAll(".project-refresh");
  projectsDom.forEach((project) => {
    project.addEventListener("click", () => {
      populateTodosDom(toCamelCase(project.firstElementChild.textContent));
    });
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
  removeAllProjectsDom();
  const projects = Object.values(todoApp.projects);
  let dataSetIndex = 0;
  projects.forEach((project) => {
    leftColumn.appendChild(
      createProjectHtmlElement(project.name, project.description, dataSetIndex)
    );
    dataSetIndex++;
  });
  addEventListenerToAddTodoButtons();
  addEventListenerPopulateProjectTodos();
}

function populateTodosDom(project) {
  const todoColumn = document.querySelector(".center");
  removeAllTodosDom();
  const todosArray = todoApp.projects[project].todos;
  todosArray.forEach((todo) => {
    todoColumn.appendChild(
      createTodoHtmlElement(todo.name, todo.completed, todo.dueDate)
    );
  });
}

function disableAddTodoButtons() {
  const addTodoButton = document.querySelectorAll(".add-pointer");
  addTodoButton.forEach((button) => {
    button.style.pointerEvents = "none";
  });
}

function enableAddTodoButtons() {
  const addTodoButton = document.querySelectorAll(".add-pointer");
  addTodoButton.forEach((button) => {
    button.style.pointerEvents = "auto";
  });
}
