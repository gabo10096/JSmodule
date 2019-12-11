<template>
    <div class="about">
        <Todos v-bind:todos="todos"/>
    </div>
</template>

<script>
import Todos from'@/components/Todos'
export default {
    name: 'Home',
    components:{
        Todos
    },
    data(){
        return{
            todos: [
                {
                    "id":1,
                    "title":"Learn Vue",
                    "completed": false
                },
                {
                    "id":2,
                    "title":"Learn Vue2",
                    "completed": false
                }
            ]
        }
    }
}
</script>
