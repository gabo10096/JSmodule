<template>
    <ul class="todo-list">
        <li v-for="todo in todos" v-bind:key="todo.id"
            class="todo" v-bind:class="{'completed':todo.completed}">
            <TodoItem :todo="todo" @mark-complete="$emit('mark-complete', todo.id)"/>
        </li>
    </ul>
</template>

<script>
import TodoItem from "./TodoItem";
export default {
    name:'Todos',
    components:{
        TodoItem
    },
    props:['todos']
}
</script>
