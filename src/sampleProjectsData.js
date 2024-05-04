export default function sampleProjectsData(todoApp) {
  todoApp.addProject("Project One", "My First Project");

  todoApp.projects.projectOne.addTodo(
    "Goodbye Note",
    "Terrible task",
    "2018-07-22",
    "medium",
    "Notes are boring",
    false
  );

  todoApp.projects.projectOne.addTodo(
    "bye",
    "Amazing task",
    "15June",
    "low",
    "notes are boring",
    false
  );

  todoApp.projects.projectOne.addTodo(
    "good",
    "task",
    "15June",
    "low",
    "notes are boring",
    true
  );
  todoApp.projects.defaultProject.addTodo(
    "Note default",
    "Default task",
    "2018-11-24",
    "low",
    "Notes are awesome",
    false
  );

  todoApp.projects.defaultProject.addTodo(
    "Default Bye",
    "Amazing Default",
    "2016-02-24",
    "high",
    "Notes are OK",
    true
  );

  todoApp.projects.defaultProject.addTodo(
    "Default good",
    "taskish",
    "2018-09-21",
    "low",
    "notes are hmmm",
    true
  );
}
