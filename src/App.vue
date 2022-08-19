<template>
  <div class="container">
    <h1>To Do List</h1>
    <ToDoInput />
    <ToDoList />
  </div>
</template>

<script>
import ToDoInput from './components/ToDoInput'
import ToDoList from './components/ToDoList';

export default {
    name: 'App',
    components: {
      ToDoInput,
      ToDoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
