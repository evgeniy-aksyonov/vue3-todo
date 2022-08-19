<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h3>{{ todo.title }}</h3>
    <div class="buttons">
      <button class="btn btn-primary mx-2">Edit</button>
      <button @click="deleteTodo(todo.id)" class="btn btn-danger">Delete</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from 'vuex';

export default {
  props: {
    todo: {}
  },
  methods: {
    ...mapActions(['deleteTodo']),
    // deleteTodo() {
    //   this.deleteTodoI(this.todo.id);
    // }
  }
}
</script>
<style>
  
</style>