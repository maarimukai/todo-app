<template>
    <InputText v-model="description"/>
    <div class="div-btn">
        <Button @click="cancel" class="btn-back">Voltar</Button>
        <Button @click="saveTodo">Salvar</Button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            description: ""
        }
    },
    props: {
        todo: Object
    },
    created() {
       if (this.todo) {
           this.description = this.todo.description;
       }
    },
    methods: {
        cancel() {
            this.$emit("cancel");
        },
        saveTodo() {
            this.$emit("saveTodo", { ...this.todo,      description: this.description });
        }
    }
}
</script>

<style scoped>
    .div-btn {
        margin-top: 1rem;
    }

    .btn-back {
        margin-right: 1rem;
    }

</style>