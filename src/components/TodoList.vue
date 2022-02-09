<template>
    <input type="checkbox"
        class="checkbox-input" 
        :id="todo"
        name="todo"
        :checked="todo.checked"
        @change="$emit('toggleTodo', todo.id)"
    />  
    <label class="todo-label" v-bind:class="{ checked: todo.checked }" :for="todo">{{ todo.description }}</label>
    <Button 
        icon="pi pi-trash" 
        class="p-button-rounded p-button-text btn-trash" 
        @click="$emit('deleteTodo', index)"
    />
</template>

<script>
export default {
    props: {
        todo: Object
    },
    data() {
        return {
            selected: [],
            id: this.todo.id,
            description: this.todo.description,
            checked: this.todo.checked
        }
    },
    created() {
        console.log(this.todo);
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');

    .checkbox-input {
        width: 18px;
        height: 18px;
        margin-right: 8px;
    }
    
    .todo-label {
        flex-grow: 1;
        width: 30vw;
        margin-left: 5px;
    }

    .todo-label.checked {
        text-decoration: line-through;
        color: darkgray;
    }

    .btn-trash {
        color: #ec5564 !important;
    }
</style>