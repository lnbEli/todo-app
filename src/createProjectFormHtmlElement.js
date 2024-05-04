export default function createProjectFormHtmlElement() {
  const div = document.createElement("div");
  const form = document.createElement("form");
  const ul = document.createElement("ul");
  const liName = document.createElement("li");
  const liDescription = document.createElement("li");
  const liButtons = document.createElement("li");
  const h4Name = document.createElement("h4");
  const h4Description = document.createElement("h4");
  const inputName = document.createElement("input");
  const inputDescription = document.createElement("input");
  const inputButtonSubmit = document.createElement("input");
  const inputButtonClose = document.createElement("input");

  //Set attributes and classes of Elements
  div.classList.add("project");
  div.classList.add("new-project-div");
  form.classList.add("add-project-form");
  h4Name.textContent = "New Project Name:";
  inputName.classList.add("project-name-form");
  inputName.setAttribute("type", "text");
  inputDescription.classList.add("project-description-form");
  inputDescription.setAttribute("type", "text");
  liButtons.classList.add("project-buttons-form");
  inputButtonSubmit.classList.add("submit-project-button-form");
  inputButtonSubmit.setAttribute("type", "submit");
  inputButtonSubmit.setAttribute("value", "create");
  inputButtonClose.classList.add("close-project-button-form");
  inputButtonClose.setAttribute("type", "button");
  inputButtonClose.setAttribute("value", "close");

  //Create DOM structure
  div.appendChild(form);
  form.appendChild(ul);
  form.appendChild(ul);

  ul.appendChild(liName);
  liName.appendChild(h4Name);
  liName.appendChild(inputName);

  ul.appendChild(liDescription);
  liDescription.appendChild(h4Description);
  liDescription.appendChild(inputDescription);

  ul.appendChild(liButtons);
  liButtons.appendChild(inputButtonSubmit);
  liButtons.appendChild(inputButtonClose);

  return div;
}
