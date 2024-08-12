<template>
    <div>
        <input 
            v-model="localSearchQuery"
            type="text"
            class="w-100 p-2 mb-3"
            placeholder="Search todos..."
            @input="updateSearchQuery"
        />
        <TodoApp 
            v-for="todo in filteredTodos" 
            :key="todo.id"
            :todo="todo"
            @toggle-checkbox="toggleCheckbox"
            @click-delete="deleteTodo"
        />
    </div>
</template>

<script>
import TodoApp from '@/components/TodoApp.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
    components: {
        TodoApp
    },
    data() {
        return {
            localSearchQuery: this.$store.state.todo.searchQuery,
            todos: this.$store.state.todo.todos
        }
    },  
    computed: {
        ...mapGetters('todo', ['filteredTodos']),
    },
    methods: {
        ...mapActions('todo', ['setSearchQuery']),
        toggleCheckbox(value) {
            this.$emit('toggle-checkbox', value);
        },
        deleteTodo(todoId) {
            this.$emit('click-delete', todoId);
        },
        updateSearchQuery(e) {
            this.setSearchQuery(e.target.value);
        }
    }
}
</script>