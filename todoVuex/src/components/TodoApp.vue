<template>
    <div class="mb-2 d-flex">
        <div v-if="isEditing">
            <input
                v-model="editedText"
                @keyup.enter="updateTodo"
                @blur="cancelEdit"    
            >
            <button @click="updateTodo" class="btn btn-primary btn-sm">Save</button>
            <button @click="cancelEdit" class="btn btn-secondary btn-sm">Cancel</button>
        </div>
        <div v-else>
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
                class="btn btn-warning btn-sm"
                @click="startEdit"
            >Edit</button>
            <button 
                class="btn btn-danger btn-sm"
                @click="clickDelete"
            >Delete</button>
            {{ numberOfCompletedTodo }}
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    props: {
        todo: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            editedText: '',
        }
    },
    computed: {
        ...mapGetters('todo', ['numberOfCompletedTodo', 'editingTodoId']),
        isEditing() {
            return this.editingTodoId === this.todo.id;
        }
        // numberOfCompletedTodo() {
        //     return this.$store.getters['todo/numberOfCompletedTodo'];
        // }
    },
    methods: {
        ...mapActions('todo', ['toggleTodo', 'deleteTodo', 'setEditingTodo', 'updateTodo']),
        toggleCheckbox(e) {
            this.toggleTodo({
                id: this.todo.id,
                checked: e.target.checked
            });
        },
        clickDelete() {
            this.deleteTodo(this.todo.id);
        },
        startEdit() {
            this.editedText = this.todo.text;
            this.setEditingTodo(this.todo.id);
        },
        updateTodo() {
            this.$store.dispatch('todo/updateTodo', {
                id: this.todo.id,
                text: this.editedText
            });
        },
        cancelEdit() {
            this.setEditingTodo(null);
        }
        // toggleCheckbox(e) {
        //     this.$store.dispatch('todo/toggleTodo', {
        //         id: this.todo.id,
        //         checked: e.target.checked
        //     });
            // this.$store.commit('TOGGLE_TODO', {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
            // this.$emit('toggle-checkbox', {
            //     id: this.todo.id,
            //     checked: e.target.checked
            // })
        // },
        // clickDelete() {
        //     this.$store.dispatch('todo/deleteTodo', this.todo.id);
        //     // this.$store.commit('DELETE_TODO', this.todo.id);
        //     // this.$emit('click-delete', this.todo.id)
        // }
    }
}
</script>