export default function createTodoFormHtmlElement() {
  const div = document.createElement("div");

  const form = document.createElement("form");

  const ul = document.createElement("ul");

  const ulNotes = document.createElement("ul");

  const liName = document.createElement("li");
  const liDescription = document.createElement("li");
  const liDueDate = document.createElement("li");
  const liPriority = document.createElement("li");
  const liCompleted = document.createElement("li");
  const liNotes = document.createElement("li");
  const liButtons = document.createElement("li");

  const h4Name = document.createElement("h4");
  const h4Description = document.createElement("h4");
  const h4DueDate = document.createElement("h4");
  const h4Priority = document.createElement("h4");
  const h4Completed = document.createElement("h4");
  const h4Notes = document.createElement("h4");

  const paragraphName = document.createElement("p");
  const paragraphDescription = document.createElement("p");
  const paragraphDueDate = document.createElement("p");
  const paragraphPriority = document.createElement("p");
  const paragraphCompleted = document.createElement("p");
  const paragraphNotes = document.createElement("p");

  const inputName = document.createElement("input");
  const inputDescription = document.createElement("input");
  const inputDueDate = document.createElement("input");
  const inputButtonSubmit = document.createElement("input");
  const inputButtonClose = document.createElement("input");

  const selectPriority = document.createElement("select");
  const selectCompleted = document.createElement("select");

  const optionLow = document.createElement("option");
  const optionMedium = document.createElement("option");
  const optionHigh = document.createElement("option");
  const optionYes = document.createElement("option");
  const optionNo = document.createElement("option");

  const textArea = document.createElement("textarea");

  //Set attributes and classes of Elements
  div.classList.add("new-todo-div");
  form.classList.add("add-todo-form");
  ul.classList.add("add-todo-form-list");

  h4Name.textContent = "Todo Name:";
  inputName.setAttribute("type", "text");

  h4Description.textContent = "Description:";
  inputDescription.setAttribute("type", "text");

  h4DueDate.textContent = "Due Date:";
  inputDueDate.setAttribute("type", "date");

  h4Priority.textContent = "Priority:";
  selectPriority.setAttribute("id", "priority-select");

  optionLow.textContent = "Low";
  optionLow.setAttribute("value", "low");
  optionMedium.textContent = "Medium";
  optionMedium.setAttribute("value", "medium");
  optionMedium.selected = "selected";
  optionHigh.textContent = "High";
  optionHigh.setAttribute("value", "high");

  h4Completed.textContent = "Completed:";
  selectCompleted.setAttribute("id", "yes-no-select");

  optionYes.textContent = "Yes";
  optionYes.setAttribute("value", "yes");
  optionNo.textContent = "No";
  optionNo.setAttribute("value", "no");
  optionNo.selected = "selected";

  ulNotes.classList.add("add-todo-form-notes-list");
  h4Notes.textContent = "Notes:";
  textArea.setAttribute("rows", "10");

  liButtons.classList.add("add-todo-form-submit-button");
  inputButtonSubmit.classList.add("submit-todo");
  inputButtonSubmit.classList.add("submit");
  inputButtonSubmit.setAttribute("type", "submit");
  inputButtonClose.classList.add("submit");
  inputButtonClose.classList.add("close-todo");
  inputButtonClose.setAttribute("type", "button");
  inputButtonClose.setAttribute("value", "close");

  //Create DOM structure
  div.appendChild(form);
  form.appendChild(ul);
  form.appendChild(ulNotes);

  ul.appendChild(liName);
  liName.appendChild(h4Name);
  liName.appendChild(paragraphName);
  paragraphName.appendChild(inputName);

  ul.appendChild(liDescription);
  liDescription.appendChild(h4Description);
  liDescription.appendChild(paragraphDescription);
  paragraphDescription.appendChild(inputDescription);

  ul.appendChild(liDueDate);
  liDueDate.appendChild(h4DueDate);
  liDueDate.appendChild(paragraphDueDate);
  paragraphDueDate.appendChild(inputDueDate);

  ul.appendChild(liPriority);
  liPriority.appendChild(h4Priority);
  liPriority.appendChild(paragraphPriority);
  paragraphPriority.appendChild(selectPriority);
  selectPriority.appendChild(optionLow);
  selectPriority.appendChild(optionMedium);
  selectPriority.appendChild(optionHigh);

  ul.appendChild(liCompleted);
  liCompleted.appendChild(h4Completed);
  liCompleted.appendChild(paragraphCompleted);
  paragraphCompleted.appendChild(selectCompleted);
  selectCompleted.appendChild(optionYes);
  selectCompleted.appendChild(optionNo);

  ulNotes.appendChild(liNotes);
  liNotes.appendChild(h4Notes);
  liNotes.appendChild(paragraphNotes);
  paragraphNotes.appendChild(textArea);

  ulNotes.appendChild(liButtons);
  liButtons.appendChild(inputButtonSubmit);
  liButtons.appendChild(inputButtonClose);

  return div;
}
