import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        title: 'Todo 1',
      },
      {
        id: 2,
        title: 'Todo 2',
      },
      {
        id: 3,
        title: 'Todo 3',
      },
    ],
  },
  getters: {
    allTodos: (state) => state.todos,
  },
  mutations: {
    add_todo(state, todo) {
      state.todos.push(todo);
    },
    delete_todo(state, id) {
      state.todos = state.todos.filter((t) => t.id !== id);
    },
    update_todo(state, todo) {
      console.log('BEFORE UPDATE state.todos: ', state.todos);

      state.todos = state.todos.map((t) => {
        if (t.id === todo.id) {
          return todo;
        }
        return t;
      });

      console.log('AFTER UPDATE state.todos: ', state.todos);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
    deleteTodo({ commit }, id) {
      commit('delete_todo', id);
    },
    updateTodo({ commit }, todo) {
      commit('update_todo', todo);
    },
  },
  modules: {},
});
