<template>
    <div>
        <button @click="$emit('all-todo')">All</button>
        <button @click="$emit('active-todo')">Active</button>
        <button @click="$emit('completed-todo')">Completed</button>
    </div>
</template>

<script>
export default {
    
}
</script>
