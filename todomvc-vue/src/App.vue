<template>
  <section class="todoapp">
    <AddTodo v-on:add-todo="addTodo"/>
    <Todos :todos="filteredTodos" @mark-complete="markComplete"/>
    <FilterTodos
      v-on:all-todo="allTodo"
      v-on:active-todo="activeTodo"  
      v-on:completed-todo="completedTodo"
    />
  </section>
</template>

<script>
  import AddTodo from "./components/AddTodo"
  import Todos from "./components/Todos"
  import FilterTodos from "./components/FilterTodos"

  export default {
    name: 'App',
    components:{
      AddTodo,
      Todos, 
      FilterTodos
    },
    data(){
      return{
        todos:[],
        counter: 0,
        filteredTodos:[]
      }
    },
    methods:{
      markComplete(id){
        this.todos.forEach(el => {
          if (el.id === id) {
            el.completed = !el.completed
            return
          }
        })
      },
      allTodo(){
        this.filteredTodos = this.todos
      },
      activeTodo(){
        this.filteredTodos = this.todos.filter(todo => !todo.completed)
      },
      completedTodo(){
        this.filteredTodos = this.todos.filter(todo => todo.completed)
      },
      addTodo(todo){
        const {title, completed} = todo
        this.todos.push({
          id: this.counter++,
          title,
          completed
        })
      }
    },
    created(){
      this.todos = [
        {
          "id":0,
          "title":"learn vue",
          "completed":false
        },
        {
          "id":1,
          "title":"learn vue-router",
          "completed":false
        },
        {
          "id":2,
          "title":"learn vuex",
          "completed":false
        }
      ],
      this.counter = this.todos.length
      this.filteredTodos = this.todos
    }
  }
</script>

<style>

</style>
