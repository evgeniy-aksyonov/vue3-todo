<template>
  <div class="d-flex justify-content-between align-items-center my-3">
    <h3 v-if="!editing">{{ todo.title }}</h3>
    <input v-else v-bind:value="todoText" @change="todoTextChange" class="col form-control" type="text">
    <div class="buttons">
      <button @click="updateTodoI(todo)" class="btn btn-primary mx-2"> {{ editing ? 'Update' : 'Edit' }}</button>
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
  data() {
    return {
      editing: false,
      todoText: this.todo.title
    }
  },
  methods: {
    ...mapActions(['deleteTodo', 'updateTodo']),
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    updateTodoI(todo) {
      this.editing = !this.editing;
      if (this.editing) {
        this.todoText = todo.title;
        this.updateTodo(todo);
      } else {
        todo.title = this.todoText;
      }
    }
  }
}
</script>
<style>
  
</style>