import Todo from "./todo";

export default class Project {
  constructor(name, discription) {
    this.name = name;
    this.discription = discription;
    this.todos = [];
    this.completedPercentage = 0;
  }

  addTodo(name, discription, dueDate, priority) {
    const todo = new Todo(name, discription, dueDate, priority);
    this.todos.push(todo);
  }

  removeTodo(name) {
    const selectedTodoIndex = this.todos.findIndex((i) => i.name === name);
    this.todos.splice(selectedTodoIndex, 1);
  }
}
