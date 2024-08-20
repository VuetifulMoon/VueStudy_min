<template>
    <div class="mb-2 d-flex">
        <div v-if="isEditing">
            <input
                v-model="editedText"
                @keyup.enter="updateTodo"
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
        // 수정할 때 editingTodoId 가져오기
        ...mapGetters('todo', ['editingTodoId']),
        // 수정할 때 todo.id와 editingTodoId가 같으면 true
        isEditing() {
            return this.editingTodoId === this.todo.id;
        }
    },
    methods: {
        ...mapActions('todo', ['toggleTodo', 'deleteTodo', 'setEditingTodo', 'updateTodo']),
        // 완료 체크
        toggleCheckbox(e) {
            this.toggleTodo({
                id: this.todo.id,
                checked: e.target.checked
            });
        },
        // 삭제
        clickDelete() {
            this.deleteTodo(this.todo.id);
        },
        // 수정 모드 시작
        startEdit() {
            this.editedText = this.todo.text;
            this.setEditingTodo(this.todo.id);
        },
        // 수정된 값 저장
        updateTodo() {
            console.log('updateTodo');
            this.$store.dispatch('todo/updateTodo', {
                id: this.todo.id,
                text: this.editedText
            });
        },
        // 수정 취소
        cancelEdit() {
            this.setEditingTodo(null);
        }
    }
}
</script>