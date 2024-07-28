<template>
  <ul class="todo-list">
    <transition-group name="list" tag="ul">
      <TodoItem
        v-for="todo in todoStore.todos"
        :key="todo.id"
        :todo="todo"
        @toggle="todoStore.toggleTodo"
        @remove="todoStore.removeTodo"
      />
    </transition-group>
  </ul>
</template>

<script setup>
import { useTodoStore } from '~/stores/todo'
import TodoItem from '~/components/TodoItem.vue'

const todoStore = useTodoStore()
</script>

<style scoped>
.todo-list {
  list-style: none;
  padding: 0;
}

.list-enter-active, .list-leave-active {
  transition: all 0.5s;
}

.list-enter, .list-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>
    