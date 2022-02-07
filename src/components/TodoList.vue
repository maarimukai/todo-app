<template>
  <input type="checkbox"
    :id="todo"
    name="todo"
    :checked="todo.checked"
    @change="$emit('toggleTodo', todo.id)"
  />
  <label class="todo-label" v-bind:class="{ checked: todo.checked }" :for="todo">{{ todo.description }}</label>
  <Button
    icon="pi pi-pencil"
    class="p-button-rounded p-button-text"
    @click="$emit('editTodo', index)"
  />
  <Button
    icon="pi pi-trash"
    class="p-button-rounded p-button-text"
    @click="$emit('deleteTodo', index)"
  />
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      selected: [],
      id: this.todo.id,
      description: this.todo.description,
      checked: this.todo.checked,
    }
  },
  created() {
    console.log(this.todo);
  }
};
</script>

<style scoped>
.todo-label {
  flex-grow: 1;
  margin-left: 5px;
  padding-top: 2px;
}
.todo-label.checked {
  text-decoration: line-through;
}

Button {
  color: grey !important;
}
</style>