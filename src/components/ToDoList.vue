<template>
  <div class="todo-list">
    <ToDoItem />
    <ToDoItem />
    <ToDoItem />
  </div>
</template>

<script>
import ToDoItem from './ToDoItem.vue';
export default {
  components: { ToDoItem }
}
</script>

<style>
.todo-list {
  margin-right: -0.75rem;
  margin-left: -0.75rem;
}
</style>