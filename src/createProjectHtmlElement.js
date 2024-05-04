export default function createProjectHtmlElement(
  name,
  description,
  dataSetIndex
) {
  const div = document.createElement("div");
  div.setAttribute("data-index", dataSetIndex);
  const h2 = document.createElement("h2");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  div.classList.add("project");
  div.classList.add("project-refresh");
  h2.textContent = name;
  paragraph.textContent = description;
  image.classList.add("add-pointer");
  image.src = "./img/addNote.png";
  image.alt = "add-todo";
  image.title = "Click to add new todo";
  div.appendChild(h2);
  div.appendChild(paragraph);
  div.appendChild(image);

  return div;
}
