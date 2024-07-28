<template>
  <li class="todo-item">
    <input type="checkbox" :checked="todo.completed" @change="toggleTodo" />
    <span :class="{ completed: todo.completed }">{{ todo.text }}</span>
    <button @click="removeTodo">Remove</button>
  </li>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  todo: {
    type: Object,
    required: true,
  },
})

const emits = defineEmits(['toggle', 'remove'])

const toggleTodo = () => {
  emits('toggle', props.todo.id)
}

const removeTodo = () => {
  emits('remove', props.todo.id)
}
</script>

<style scoped>
.todo-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-bottom: 10px;
  transition: background-color 0.3s, transform 0.3s;
}

.todo-item:hover {
  background-color: #f9f9f9;
  transform: scale(1.02);
}

.todo-item input[type="checkbox"] {
  margin-right: 10px;
}

.todo-item span {
  flex: 1;
  transition: color 0.3s, text-decoration 0.3s;
}

.todo-item span.completed {
  text-decoration: line-through;
  color: #999;
}

.todo-item button {
  padding: 5px 10px;
  border: none;
  background-color: #dc3545;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.todo-item button:hover {
  background-color: #c82333;
}
</style>
