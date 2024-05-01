export default function createTodoHtmlElement(name, completed, due) {
  const div = document.createElement("div");
  const h3 = document.createElement("h3");
  const h5Completed = document.createElement("h5");
  const h5Due = document.createElement("h5");
  const spanOuter = document.createElement("span");
  const spanInnerOne = document.createElement("span");
  const spanInnerTwo = document.createElement("span");
  const paragraph = document.createElement("p");
  const label = document.createElement("label");
  const input = document.createElement("input");

  div.classList.add("todo");
  h3.textContent = name;
  spanOuter.classList.add("todo-btns");
  label.classList.add("completed-label");
  h5Completed.textContent = "Completed";
  input.setAttribute("id", "checkboxTest1");
  input.setAttribute("type", "checkbox");
  completed ? (input.checked = true) : (input.checked = false);
  h5Due.textContent = "Due Date";
  paragraph.textContent = due;
  spanInnerTwo.classList.add("bin");
  spanInnerTwo.textContent = "🗑";

  div.appendChild(h3);
  div.appendChild(spanOuter);
  spanOuter.appendChild(label);
  label.appendChild(h5Completed);
  label.appendChild(input);
  spanOuter.appendChild(spanInnerOne);
  spanInnerOne.appendChild(h5Due);
  spanInnerOne.appendChild(paragraph);
  spanOuter.appendChild(spanInnerTwo);

  return div;
}
