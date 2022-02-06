<template>
    <div class="div-item">
        <InputText v-model="description"/>
        <Button @click="saveTodo">Salvar</Button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: "",
            checked: false
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
        cancel() {
            this.$emit("cancel");
        },
        saveTodo() {
            this.$emit("saveTodo", { ...this.todo, description: this.description, checked: this.checked });
        }
    }
}
</script>

<style scoped>
    .div-item {
        display: flex;
        justify-content: center;
    }
</style>