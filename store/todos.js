export const state = () => ({
  list: [],
  todo: {
    id: null,
    todo_title: "",
    todo_description: ""
  }
});

export const mutations = {
  add(state, todo) {
    console.log("In Store: " + todo.todo_description);
    state.list.push({
      id: todo.id++,
      todo_title: todo.todo_title,
      todo_description: todo.todo_description,
      done: false
    });
    console.log(todo);
  },
  ADD_TASK(state, todo) {
    if (
      state.list.map((todo) => todo.todo_title).indexOf(todo.todo_title) === -1
    ) {
      state.list.push({
        id: todo.id++,
        todo_title: todo.todo_title,
        todo_description: todo.todo_description,
        done: false
      });
    }
  },
  remove(state, todo) {
    // this.todos.splice(this.todos.indexOf(todo), 1);
    // state.list.splice(state.list.indexOf(todo), 1);
    // var index = state.list.findIndex((todo) => todo.id === id);
    //this.list.splice(index, 1);
    const i = state.list.map((item) => item.id).indexOf(todo.id);
    state.list.splice(i, 1);
  },
  toggle(state, todo) {
    todo.done = !todo.done;
  }
};
