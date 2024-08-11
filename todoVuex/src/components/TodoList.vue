<template>
    <div>
        <TodoApp 
            v-for="todo in todos" 
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
        />
    </div>
</template>

<script>
import TodoApp from '@/components/TodoApp.vue';
export default {
    components: {
        TodoApp
    },
    computed: {
        todos() {
            return this.$store.state.todo.todos;
        }
    },
    methods: {
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value);
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId);
        }
    }
}
</script>