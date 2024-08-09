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
    props: {
        todos: {
            type: Array,
            required: true
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