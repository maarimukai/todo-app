<template>
  <div v-if="!editMode" class="div-todo">
    <h1>T O D O</h1>
    <todo-item
      class="todo-list" 
      @saveTodo="saveTodo" 
      :todo="todo" 
    />
    <div class="div-list scroller">
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
    color: #2a3047;
    display: flex;
    justify-content: center;
  }

  body {
    /* background-image: linear-gradient(to bottom right, #9708cc, #43cbff); */
    /* background-image: linear-gradient(to bottom right, #0e5cad, #79f1a4); */
    /* background-image: linear-gradient(to bottom right, #9f44d3, #e2b0ff); */
    background-image: linear-gradient(to bottom right, #f02fc2, #6094ea);
  }

  h1 {
    color: #ffffff;
    text-shadow: 1px 1px 20px #2a3047; 
    text-align: center;
    font-size: 60px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .todo-list {
    margin-block: 1rem;
  }

  .div-list {
    width: 50vw;
    height: 80vh;
    background-image: url(https://i.pinimg.com/564x/63/59/91/63599123d7f0048709e3875384f1a156.jpg);
    background-position: center;
    background-size: 100%;
    border-radius: 15px;
    padding-top: 18px;
    overflow-y: scroll;
  }

  .div-list::-webkit-scrollbar {
    width: 8px;
  }

  .div-list::-webkit-scrollbar-thumb {
    border-radius: 20px;
  }

  .div-list::-webkit-scrollbar-thumb:hover {
    background: #3a405a; 
  }

  .scroller {
    overflow-y: scroll;
    scrollbar-color: #3a405a #f5f5f5;
    scrollbar-width: auto;
  }

  .todo-item {
    font-family: 'Patrick Hand', cursive;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-items: center;
    padding-left: 20px;
    padding-right: 10px;
    word-break: break-word;
  }

</style>
