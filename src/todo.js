export default class Todo {
  constructor(
    name,
    discription,
    dueDate,
    priority,
    notes = null,
    completed = false
  ) {
    this.name = name;
    this.discription = discription;
    this.dueDate = dueDate;
    this.priority = priority;
    this.notes = notes;
    this.completed = false;
  }

  changePriority(level) {
    this.priority = level;
  }

  completed() {
    this.completed = true;
  }
}
