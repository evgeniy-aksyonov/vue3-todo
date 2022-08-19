<template>
  <div v-for="(todo) in allTodos" :key="todo.id" class="todo-list">
    <ToDoItem :todo="todo" />
  </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue';
import { mapGetters } from 'vuex';

export default {
  components: { ToDoItem },
  computed: {
    ...mapGetters(['allTodos'])
  }
}
</script>

<style>
.todo-list {
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}
</style>