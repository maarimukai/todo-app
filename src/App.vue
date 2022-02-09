<template>
  <div v-if="!editMode" class="div-todo">
    <h1>T O D O</h1>
    <todo-item
      class="todo-list" 
      @saveTodo="saveTodo" 
      :todo="todo" 
    />
    <div class="div-list">
        <div class="todo-item field-checkbox" v-for="(todo, index) in todos" :key="index">
          <todo-list
            :todo="todo"
            @toggleTodo="toggleTodo" 
            @deleteTodo="deleteTodo" 
          />
        </div>
    </div>
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
    // editTodo(index) {
    //   this.todo = this.todo[index];
    //   this.editMode = true;
    // },
    toggleTodo(id) {
      console.log(id);
      let todo = this.todos.find((item) => item.id === id);
      console.log(todo);
      todo.checked = !todo.checked;
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
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

  #app {
    font-family: 'Patrick Hand', cursive;
    color: #242424;
    display: flex;
    justify-content: center;
  }

  body {
    background-color: #171722;
  }


  h1 {
    color: antiquewhite;
    text-align: center;
    font-size: 40px;
  }

  .todo-list {
    margin-block: 1.5rem;
  }

  .div-list {
    width: 50vw;
    height: 80vh;
    background-image: url(https://i.pinimg.com/564x/63/59/91/63599123d7f0048709e3875384f1a156.jpg);
    background-position: center;
    background-size: 100%;
    border-radius: 15px;
    padding-top: 18px;
  }

  .todo-item {
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-items: center;
    padding-left: 20px;
    padding-right: 20px;
  }

</style>
