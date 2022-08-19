<template>
  <div>
    <div class="row">
      <input v-model="todoText" class="col form-control" type="text" />
      <button @click="addTodoId(todoText)" class="btn btn-primary">Add</button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import { v1 } from 'uuid';

export default {
  data() {
    return {
      todoText: ''
    }
  },
  methods: {
    ...mapActions(['addTodo']),
    addTodoId() {
      this.addTodo({
        id: v1(),
        title: this.todoText
      });
      this.todoText = '';
    }
  },
}
</script>

<style scoped>
input {
  width: 75%;
  margin-right: 10px;
}

button {
  width: 25%;
}
</style>