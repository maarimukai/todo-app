<template>
    <form class="div-item" @submit.prevent="saveTodo">
        <InputText class="input" v-model="description"/>
        <Button type="submit" >+</Button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            description: "",
            checked: false,
        }
    },
    props: {
        todo: Object
    },
    created() {
       if (this.todo) {
           this.description = this.todo.description;
           this.checked = false;
       }
    },
    methods: {
        saveTodo(event) {
            this.$emit("saveTodo", { ...this.todo, description: this.description, checked: this.checked });
             event.preventDefault();
 
             this.description = '';
 
             event.target.reset();
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap');
    
    .div-item {
        font-family: 'Patrick Hand', cursive !important;
        display: flex;
        justify-content: center;
    }

    .input {
        font-family: 'Patrick Hand', cursive !important;
        font-size: 20px;
        width: 275px;
        border: none;
        border-radius: 20px;
        margin-right: 15px;
        padding-left: 20px;
        opacity: 0.9;
    }

    Button {
        border-radius: 45px;
        font-size: 20px;
        font-weight: bold;
    }

    .p-button{
        background-color: #3a405a;
        border: 1px solid #3a405a;
    }

    .p-button:enabled:hover {
        background-color: #3a405a;
    }

</style>