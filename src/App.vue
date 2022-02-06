<template>
  <div v-if="!editMode" class="div-todo">
    <h1>TODO</h1>
    <todo-item
      class="todo-item" 
      @saveTodo="saveTodo" 
      :todo="todo" 
    />
    <todo-list 
      :todos="todos"
      @toggleTodo="toggleTodo" 
      @deleteTodo="deleteTodo" 
      @editTodo="editTodo"
    />
  </div>
</template>

<script>
import TodoList from "./components/TodoList.vue";
import TodoItem from "./components/TodoItem.vue";

export default {
  components: {
    TodoList,
    TodoItem
  },
  data() {
    return {
      editMode: false,
      todos: [],
      todo: null,
      nextId: 1
    }
  },
  methods: {
    newTodo() {
      this.todo = null;
      this.editMode = true;
    },
    cancel(){
      this.editMode = false;
    },
    saveTodo(todo) {
      if (todo.id) {
        const index = this.todos.findIndex((item) => item.id === todo.id);
        this.todos[index] = todo;
      } else {
        todo = { id: this.nextId, ...todo };
        this.todos.push(todo);

        this.nextId++;
        localStorage.setItem("nextItem", this.nextId);
      }
      localStorage.setItem("todos", JSON.stringify(this.todos));
      this.editMode = false;

    },
    deleteTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    editTodo(index) {
      this.todo = this.todos[index];
      this.editMode = true;
    },
    toggleTodo(index, checked) {
      let todo = this.todos[index]
      todo.checked = !todo.checked
      this.todos[index] = todo
      console.log(this.todos[index])
      console.log(checked)
      localStorage.setItem("todos", JSON.stringify(this.todos));
    }
  },
  created() {
    const todos = localStorage.getItem("todos");
    if (todos) {
      this.todos = JSON.parse(todos);
    }
    const nextId = localStorage.getItem("nextId");
    if (nextId) {
      this.nextId = parseInt(nextId);
    }
  }
}
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    color: #2c3e50;
    display: flex;
    justify-content: center;
  }

  .div-todo {
    width: 50vw;
    height: 80vh;
    background-color: lightgray;
    border-radius: 15px;
  }

  h1 {
    text-align: center;
  }

</style>
