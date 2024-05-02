export default class Todo {
  constructor(
    name,
    description,
    dueDate,
    priority,
    notes = null,
    completed = false
  ) {
    this.name = name;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = completed;
  }

  changePriority(level) {
    this.priority = level;
  }

  completed() {
    this.completed = true;
  }
}
