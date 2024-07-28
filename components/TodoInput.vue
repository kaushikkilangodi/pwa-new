<template>
  <div class="todo-input">
    <input v-model="newTodo" @keyup.enter="addTodo" placeholder="Add a new to-do" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useTodoStore } from '~/stores/todo'

const newTodo = ref('')
const todoStore = useTodoStore()

const addTodo = () => {
  if (newTodo.value.trim() !== '') {
    todoStore.addTodo(newTodo.value)
    newTodo.value = ''
  }
}
</script>

<style scoped>
.todo-input {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
  align-items: center;
}

.todo-input input {
  flex: 1;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s;
}

.todo-input input:focus {
  border-color: #007bff;
  outline: none;
}

.todo-input button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.todo-input button:hover {
  background-color: #0056b3;
}
</style>
