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
        />
        <FilterButtons />
    </div>
</template>

<script>
import TodoApp from '@/components/TodoApp.vue';
import { mapActions, mapGetters } from 'vuex';
import FilterButtons from './FilterButtons.vue';

export default {
    components: {
        TodoApp,
        FilterButtons,
    },
    data() {
        return {
            // searchQuery 가져오기
            localSearchQuery: this.$store.state.todo.searchQuery,
        }
    },  
    computed: {
        ...mapGetters('todo', ['filteredTodos']),
    },
    methods: {
        ...mapActions('todo', ['setSearchQuery']),
        // 검색어를 $store.state.todo.searchQuery에 반영
        updateSearchQuery(e) {
            this.setSearchQuery(e.target.value);
        }
    }
}
</script>