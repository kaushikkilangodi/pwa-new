<template>
  <div class="container">
    <h1>Todo List</h1>
    <TodoInput />
    <TodoList />
  </div>
</template>

<script setup>
import TodoInput from '~/components/TodoInput.vue'
import TodoList from '~/components/TodoList.vue'
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
}

h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2em;
  color: #333;
}
</style>
