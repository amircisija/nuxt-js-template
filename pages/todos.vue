<template>
  <div>
    <div class="row">
      <div class="col-sm-12">
        <h3>Ticket Tracker</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-sm-5">
        <form @submit.prevent>
          <div class="form-group">
            <label for="todo_title">What needs to be done?</label>
            <input id="todo_title" v-model="todo.todo_title" class="form-control">
            <small class="form-text text-muted">Enter the Todo item</small>
          </div>
          <div class="form-group">
            <label for="todo_description">Description</label>
            <textarea
              class="form-control"
              v-model="todo.todo_description"
              id="todo_description"
              rows="3"
            ></textarea>
            <small class="form-text text-muted">Task description</small>
          </div>
          <div class="form-group">
            <button @click="addTodo(todo)" class="btn btn-success">Add Todo</button>
          </div>
        </form>
      </div>
      <div class="col-sm-7">
        <ul class="list-group">
          <li
            class="list-group-item todo__single--item box-shadow-1"
            v-for="todo in todos"
            :key="todo.id"
          >
            <div class="row d-flex align-content-start flex-wrap">
              <div class="col-xs-2 col-sm-1 col-lg-1 text-center">
                <input
                  :checked="todo.done"
                  @change="toggle(todo)"
                  type="checkbox"
                  class="form-control checkbox__1"
                >
              </div>
              <div class="col-xs-10 col-sm-6 col-lg-6 my-auto text-left">
                <span
                  class="todo__title"
                  :class="{ done: todo.done }"
                >{{ todo.id }}. {{ todo.todo_title }}</span>
              </div>
              <div class="col-xs-12 col-sm-4 col-lg-4 text-lg-right text-sm-right">
                <button @click="removeTodo(todo)" class="btn btn-danger">Remove</button>
              </div>
              <div class="col-sm-12 text-left">
                <hr>
                <span>{{ todo.todo_description }}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      todo: {
        id: 1,
        todo_title: "",
        todo_description: ""
      }
    };
  },
  computed: {
    todos() {
      return this.$store.state.todos.list;
    },
    counter() {
      return this.$store.state.counter;
    }
  },
  methods: {
    addTodo(todo) {
      //  this.$store.commit("todos/add", e.target.value);
      //  e.target.value = "";
      console.log(todo);
      this.$store.commit("todos/ADD_TASK", this.todo);
    },
    ...mapMutations({
      toggle: "todos/toggle"
    }),
    removeTodo(todo) {
      this.$store.commit("todos/remove", todo);
    }
  }
};
</script>

<style>
.done {
  text-decoration: line-through;
}
.form-control:focus {
  color: #495057;
  background-color: #fff;
  border-color: none;
  outline: 0;
  box-shadow: none;
  border: none !important;
}
.todo__title {
  font-weight: 500;
}
.checkbox__1 {
  width: 20px;
  cursor: pointer;
}
.todo__single--item {
  border: none;
}
.form-control {
  border-radius: 0;
}
</style>