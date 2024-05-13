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
import createCenterColumnAddTodoHtmlButtonElement from "./createCenterColumnAddTodoHtmlButtonElement";
import { format, formatDistance, formatRelative, subDays } from "date-fns";
import Project from "./project.js";
import storageAvailable from "./storageAvailable.js";

const todoApp = new App();
const leftColumn = document.querySelector(".left");
const centerColumn = document.querySelector(".center");
const rightColumn = document.querySelector(".right");
const bottom = document.querySelector(".bottom");

//start up
function init() {
  getAnyAvailableLocalStorage();
  leftColumn.appendChild(createProjectTabHtmlElement());
  addEventListenerAddProjectButton();
  populateProjectsDom();
  populateTodosDom("defaultProject");
  populateTodoDetailsDom("defaultProject", 0);
}
init();

function openAddTodoForm(project) {
  bottom.appendChild(createTodoFormHtmlElement(project));
  addEventListenerToTodoFormButtons();
  setTwoColumnLayout();
  disableAddTodoButtons();
}

function submitTodo(e) {
  e.preventDefault();
  submitTodoValues();
  const todoFormElement = document.querySelector(".new-todo-div");
  const project = todoFormElement.dataset.project;
  const lastTodoIndex = todoApp.projects[project].todos.length - 1;
  todoFormElement.remove();
  setThreeColumnLayout();
  populateTodosDom(project);
  populateTodoDetailsDom(project, lastTodoIndex);
  enableAddTodoButtons();
}

function closeTodo(e) {
  e.preventDefault();
  const todoFormElement = document.querySelector(".new-todo-div");
  todoFormElement.remove();
  setThreeColumnLayout();
  enableAddTodoButtons();
}

function addProject() {
  console.log(todoApp);
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
  const projectName = toCamelCase(addProjectName.value);
  todoApp.addProject(projectName, addProjectDescription.value);
  addProjectName.value = "";
  addProjectDescription.value = "";
  setToLocalStorage();
  populateProjectsDom();
  closeProject();
  addCenterColumnAddTodoButton(projectName);
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
    element.addEventListener("click", () => {
      const project = toCamelCase(
        element.parentElement.firstElementChild.textContent
      );
      openAddTodoForm(project);
    });
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
      const selectedProject = toCamelCase(
        project.firstElementChild.textContent
      );
      populateTodosDom(selectedProject);
      populateTodoDetailsDom(selectedProject, 0);
    });
  });
}

function addEventListenerPopulateTodoDetails() {
  const todosDom = document.querySelectorAll(".todo");
  todosDom.forEach((todo) => {
    todo.addEventListener("click", () => {
      const selectedtodoIndex = Number(todo.dataset.index);
      const currentProject = todo.dataset.project;
      populateTodoDetailsDom(currentProject, selectedtodoIndex);
    });
  });
}

function addEventListenerToDeleteTodoButtons() {
  const deleteButtons = document.querySelectorAll(".bin");
  deleteButtons.forEach((button) => {
    button.addEventListener("click", (e) => {
      //stops event bubbling
      e.stopPropagation();
      const currentProject = button.parentElement.parentElement.dataset.project;
      const todoIndex = button.parentElement.parentElement.dataset.index;
      todoApp.projects[currentProject].todos.splice(todoIndex, 1);
      setToLocalStorage();
      populateTodosDom(currentProject);
      populateTodoDetailsDom(currentProject, Math.max(0, todoIndex - 1));
    });
  });
}

function addEventListenerToCenterAddTodoButton() {
  const addTodoButton = document.querySelector(".center-add-todo-button");
  const currentProject = addTodoButton.dataset.project;

  addTodoButton.addEventListener("click", () => {
    openAddTodoForm(currentProject);
    removeCenterColumnAddTodoButton();
  });
}

function addEventListenerToCompletedTodoCheckbox() {
  const completedCheckboxes = document.querySelectorAll(".checkbox");
  completedCheckboxes.forEach((checkbox) => {
    checkbox.addEventListener("click", () => {
      const currentProject =
        checkbox.parentElement.parentElement.parentElement.dataset.project;
      const todoIndex = Number(
        checkbox.parentElement.parentElement.parentElement.dataset.index
      );
      const todo = todoApp.projects[currentProject].todos[todoIndex];

      todo.completed ? (todo.completed = false) : (todo.completed = true);
      setToLocalStorage();
    });
  });
}

function addEventListenerToDetailedTodo() {
  const dueDateInput = document.querySelector(".due-date");
  const selectedTodo = document.querySelector(".selected-todo");
  const currentProject = selectedTodo.dataset.project;
  const todoIndex = selectedTodo.dataset.index;
  const todo = todoApp.projects[currentProject].todos[todoIndex];
  const completedInput = document.getElementById("yes-no-select");
  const priorityInput = document.getElementById("priority-select");
  const notesInput = document.querySelector(".notes-deatiled-todo");

  //eventListeners
  dueDateInput.addEventListener("change", () => {
    todo.dueDate = dueDateInput.value;
    populateTodosDom(currentProject);
    populateTodoDetailsDom(currentProject, todoIndex);
    setToLocalStorage();
  });

  completedInput.addEventListener("change", () => {
    completedInput.value === "yes"
      ? (todo.completed = true)
      : (todo.completed = false);
    populateTodosDom(currentProject);
    populateTodoDetailsDom(currentProject, todoIndex);
    setToLocalStorage();
  });

  priorityInput.addEventListener("change", () => {
    todo.priority = priorityInput.value;
    populateTodosDom(currentProject);
    populateTodoDetailsDom(currentProject, todoIndex);
    setToLocalStorage();
  });

  notesInput.addEventListener("focusout", () => {
    todo.notes = notesInput.textContent;
    setToLocalStorage();
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

function removeTodoDetailsDom() {
  const todoDetail = document.querySelector(".selected-todo");
  if (todoDetail) {
    todoDetail.remove();
  }
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
  removeTodoDetailsDom();
  removeAllTodosDom();
}

function populateTodosDom(project) {
  const todoColumn = document.querySelector(".center");
  removeAllTodosDom();
  const todosArray = todoApp.projects[project].todos;
  let dataSetIndex = 0;
  todosArray.forEach((todo) => {
    todoColumn.appendChild(
      createTodoHtmlElement(
        todo.name,
        todo.completed,
        todo.dueDate,
        dataSetIndex,
        project
      )
    );
    dataSetIndex++;
  });
  addEventListenerPopulateTodoDetails();
  addEventListenerToDeleteTodoButtons();
  addEventListenerToCompletedTodoCheckbox();
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

function submitTodoValues() {
  const name = document.querySelector(".todo-name-form");
  const description = document.querySelector(".todo-description-form");
  const dueDate = document.querySelector(".todo-date-form");
  const priority = document.querySelector(".todo-priority-form");
  const completed = document.querySelector(".todo-completed-form");
  const notes = document.querySelector(".todo-notes-form");
  const project = document.querySelector(".new-todo-div").dataset.project;

  todoApp.projects[project].addTodo(
    name.value,
    description.value,
    dueDate.value,
    priority.value,
    notes.value,
    completed.value
  );

  setToLocalStorage();
}

function populateTodoDetailsDom(project, todoIndex) {
  const selectedTodo = todoApp.projects[project].todos[todoIndex];
  removeTodoDetailsDom();
  if (selectedTodo) {
    rightColumn.appendChild(
      createTodoDetailedHtmlElement(
        selectedTodo.name,
        selectedTodo.description,
        selectedTodo.dueDate,
        selectedTodo.priority,
        selectedTodo.notes,
        selectedTodo.completed,
        todoIndex,
        project
      )
    );
    addEventListenerToDetailedTodo();
  }
}

function setThreeColumnLayout() {
  centerColumn.style.display = "grid";
  rightColumn.style.display = "block";
  bottom.style.gridTemplateColumns = "1fr 1fr 1fr";
}

function setTwoColumnLayout() {
  bottom.style.gridTemplateColumns = "1fr 1fr";
  centerColumn.style.display = "none";
  rightColumn.style.display = "none";
}

function addCenterColumnAddTodoButton(project) {
  centerColumn.style.gridAutoRows = "100%";
  centerColumn.appendChild(createCenterColumnAddTodoHtmlButtonElement(project));
  addEventListenerToCenterAddTodoButton();
}

function removeCenterColumnAddTodoButton() {
  centerColumn.style.gridAutoRows = "25%";
  const centerAddTodoButton = document.querySelector(".center-add-todo-div");
  centerAddTodoButton.remove();
}

function setToLocalStorage() {
  const currentProjectsJSON = JSON.stringify(todoApp.projects);
  localStorage.setItem("projects", currentProjectsJSON);
}

function getLocalStorage() {
  const localStorageProjectsJSON = localStorage.getItem("projects");
  const projects = JSON.parse(localStorageProjectsJSON);
  for (let project in projects) {
    Object.setPrototypeOf(projects[project], Project.prototype);
  }
  return projects;
}

function getAnyAvailableLocalStorage() {
  if (storageAvailable("localStorage")) {
    if (getLocalStorage() === null) {
      sampleProjectsData(todoApp);
    } else {
      todoApp.projects = getLocalStorage();
    }
  } else {
    console.log("Local storage not available");
  }
}
