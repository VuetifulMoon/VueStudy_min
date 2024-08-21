<template>
    <div>
        <button 
            :class="{ active: filter === 'all' }"
            @click="setFilter('all')"
        >전체</button>
        <button 
            :class="{ active: filter === 'incomplete' }"
            @click="setFilter('incomplete')"
        >미완료</button>
        <button 
            :class="{ active: filter === 'completed' }"
            @click="setFilter('completed')"
        >완료</button>
    </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
    computed: {
        ...mapState('todo', ['filter']),
    },
    methods: {
        ...mapActions('todo', ['setFilter']),
    }
}
</script>

<style scoped>
.active {
    font-weight: bold;
    color: blue;
}
</style>