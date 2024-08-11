<template>
    <div class="mb-2 d-flex">
        <div>
            <input 
                type="checkbox" 
                :checked="todo.checked"
                @change="toggleCheckbox"
            >
            <span 
                class="ms-3"
                :class="todo.checked? 'text-muted' : ''"
                :style="todo.checked? 'text-decoration: line-through' : ''"
            >
                {{ todo.text }}
            </span>
            <button 
                class="btn btn-danger btn-sm"
                @click="clickDelete"
            >Delete</button>
            {{ numberOfCompletedTodo }}
        </div>
    </div>
</template>

<script>
export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    computed: {
        numberOfCompletedTodo() {
            return this.$store.getters['todo/numberOfCompletedTodo'];
        }
    },
    methods: {
        toggleCheckbox(e) {
            this.$store.dispatch('todo/toggleTodo', {
                id: this.todo.id,
                checked: e.target.checked
            });
            // this.$store.commit('TOGGLE_TODO', {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
            // this.$emit('toggle-checkbox', {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
        },
        clickDelete() {
            this.$store.dispatch('todo/deleteTodo', this.todo.id);
            // this.$store.commit('DELETE_TODO', this.todo.id);
            // this.$emit('click-delete', this.todo.id)
        }
    }
}
</script>