<template>
  <div>
    <div class="row">
      <input @change="todoTextChange" v-bind:value="todoText" class="col form-control" type="text" />
      <button @click="addTodoI" class="btn btn-primary">Add</button>
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
    todoTextChange(e) {
      this.todoText = e.target.value;
    },
    addTodoI() {
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