<template>
    <div>
        <div v-for="todo in todos" :key="todo.id">
            <TodoItem v-bind:todo="todo"/>
        </div>
    </div>
</template>

<script>
import TodoItem from "./TodoItem.vue";
export default {
    name: 'Todos',
    components:{
        TodoItem
    },
    props: ["todos"]
}
</script>
