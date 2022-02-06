<template>
    <div class="todo-list">
        <div class="todo-item field-checkbox" v-for="(todo, index) in todos" :key="index">
            <Checkbox :id="todo" name="todo" v-model="checked" :value="todo" @change="$emit('toggleTodo', index, todo)"/>
            <label class="todo-label" :for="todo" style="text-decoration: line-through" >{{ todo.description }}</label>
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
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todos: Array
    },
    data() {
        return {
            checked: []
        }
    }
}
</script>

<style scoped>
    .todo-list {
        margin: 1rem;
    }
    .todo-item {
        display: flex;
        align-items: center;
        justify-items: center;
        border-bottom: 1px solid whitesmoke;
    }

    .todo-label {
        flex-grow: 1;
        margin-left: 5px;
        padding-top: 2px;
    }

    Button {
        color: grey !important;
    }
</style>