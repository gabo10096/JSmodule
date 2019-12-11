<template>
    <div>
        <input type="checkbox" @change="$emit('mark-complete', todo.id)">
        <label>{{todo.title}}</label>
        <button>x</button>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    props: ['todo']
}
</script>

<style>
    .todo-list li.completed label {
        color:grey;
        text-decoration: line-through
    }
</style>

