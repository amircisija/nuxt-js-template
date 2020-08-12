<template>
  <form @submit.prevent>
    <div class="form-group">
      <label for="todo_title">Title of the ticket</label>
      <input id="todo_title" v-model="todo.todo_title" class="form-control">
      <small class="form-text text-muted">Enter the Todo item</small>
    </div>
    <div class="form-group">
      <label for="todo_description">Description</label>
      <textarea class="form-control" v-model="todo.todo_description" id="todo_description" rows="3"></textarea>
      <small class="form-text text-muted">Task description</small>
    </div>
    <div class="form-group">
      <button @click="addTodo(todo)" class="btn btn-success">Add Todo</button>
    </div>
  </form>
</template>
