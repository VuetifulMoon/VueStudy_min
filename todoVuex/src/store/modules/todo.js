export default {
    namespaced: true,
    state: {
        todos: [
            { id: 1, text: 'buy a car', checked: false},
            { id: 2, text: 'play game', checked: false},
        ], 
        editingTodoId: null,
        searchQuery: ''
    },
    mutations: {
        // 수정 모드 설정
        SET_EDITING_TODO(state, todoId) {
            state.editingTodoId = todoId;
        },
        // 수정된 할 일 저장
        UPDATE_TODO(state, { id, text }) {
            const index = state.todos.findIndex(todo => todo.id === id);
            if(index !== -1) {
                state.todos[index].text = text;
            }
            state.editingTodoId = null;
        },
        // 할 일 추가
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value.trim(),
                checked: false,
            });
        },
        // 완료 체크
        TOGGLE_TODO(state, { id, checked }) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            })
            state.todos[index].checked = checked;
        },
        // 삭제
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        },
        // 검색어 설정
        SET_SEARCH_QUERY(state, query) {
            state.searchQuery = query;
        }
    },
    actions: {
        setEditingTodo({ commit }, todoId) {
            commit('SET_EDITING_TODO', todoId);
        },
        updateTodo({ commit }, payload) {
            commit('UPDATE_TODO', payload);
        },
        addTodo({ commit }, value) {
            commit('ADD_TODO', value);
        },
        toggleTodo({ commit }, payload) {
            commit('TOGGLE_TODO', payload);
        },
        deleteTodo({ commit }, todoId) {
            commit('DELETE_TODO', todoId);
        },
        setSearchQuery( { commit }, query) {
            commit('SET_SEARCH_QUERY', query);
        }
    },
    getters: {
        // 완료된 할 일 수
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        },
        // 수정할 때 editingTodoId 전송
        editingTodoId: state => state.editingTodoId,
        // 검색한 할 일
        filteredTodos: state => {
            const query = state.searchQuery.toLowerCase();
            return state.todos.filter(todo => todo.text.toLowerCase().includes(query));
        }
    }
}