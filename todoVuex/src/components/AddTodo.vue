<template>
    <input 
        v-model="todoText"
        type="text" 
        class="w-100 p-2" 
        placeholder="Type todo"
        @keyup.enter="addTodo"
    >
</template>

<script>
export default {
    data() {
        return {
        todoText: '',
        }
    },
    methods: {
        addTodo(e) {
            this.$store.dispatch('todo/addTodo', e.target.value);
            this.todoText = '';
        }
    }
}
</script>