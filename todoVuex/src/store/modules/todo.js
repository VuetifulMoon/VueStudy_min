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
        SET_EDITING_TODO(state, todoId) {
            state.editingTodoId = todoId;
        },
        UPDATE_TODO(state, { id, text}) {
            const index = state.todos.findIndex(todo => todo.id === id);
            if(index !== -1) {
                state.todos[index].text = text;
            }
            state.editingTodoId = null;
        },
        ADD_TODO(state, value) {
            state.todos.push({
                id: Math.random(),
                text: value,
                checked: false,
            });
        },
        TOGGLE_TODO(state, {id, checked}) {
            const index = state.todos.findIndex(todo => {
                return todo.id === id;
            })
            state.todos[index].checked = checked;
        },
        DELETE_TODO(state, todoId) {
            const index = state.todos.findIndex(todo => {
                return todo.id === todoId;
            });
            state.todos.splice(index, 1);
        },
        SET_SEARCH_QUERY(state, query) {
            console.log('SET_SEARCH_QUERY: ', query);
            state.searchQuery = query;
        }
    },
    actions: {
        setEditingTodo({ commit }, todoId) {
            commit('SET_EDITING_TODO', todoId);
        },
        updateTodo({ commit }, payload) {
            setTimeout(() => {
                commit('UPDATE_TODO', payload);
            }, 500);
        },
        addTodo({ commit }, value) {
            setTimeout(function() {
                commit('ADD_TODO', value);
            }, 500);
        },
        toggleTodo({ commit }, payload) {
            setTimeout(function () {
                commit('TOGGLE_TODO', payload);
            }, 500);
        },
        deleteTodo({ commit }, todoId) {
            setTimeout(function () {
                commit('DELETE_TODO', todoId);
            }, 500);
        },
        setSearchQuery( { commit }, query) {
            commit('SET_SEARCH_QUERY', query);
        }
    },
    getters: {
        numberOfCompletedTodo: state => {
            return state.todos.filter(todo => todo.checked).length;
        },
        editingTodoId: state => state.editingTodoId,
        filteredTodos: state => {
            const query = state.searchQuery.toLowerCase();
            return state.todos.filter(todo => todo.text.toLowerCase().includes(query));
        }
    }
}