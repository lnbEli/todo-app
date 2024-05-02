export default function createProjectHtmlElement(name, description) {
  const div = document.createElement("div");
  const h2 = document.createElement("h2");
  const paragraph = document.createElement("p");
  const image = document.createElement("img");
  div.classList.add("project");
  div.classList.add("project-refresh");
  h2.textContent = name;
  paragraph.textContent = description;
  image.classList.add("add-todo");
  image.src = "./img/addNote.png";
  image.alt = "add-note";
  image.title = "Click to add new note";
  div.appendChild(h2);
  div.appendChild(paragraph);
  div.appendChild(image);

  return div;
}
