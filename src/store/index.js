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
      console.log('todo: ', todo);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit('add_todo', todo);
    },
  },
  modules: {},
});
