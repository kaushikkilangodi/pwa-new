import { defineStore } from "pinia";

export const useTodoStore = defineStore("todo", {
  state: () => ({
    todos: [] as Array<{ id: number; text: string; completed: boolean }>,
  }),
  actions: {
    addTodo(text: string) {
      this.todos.push({ id: Date.now(), text, completed: false });
    },
    toggleTodo(id: number) {
      const todo = this.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
    removeTodo(id: number) {
      this.todos = this.todos.filter((todo) => todo.id !== id);
    },
  },
});
