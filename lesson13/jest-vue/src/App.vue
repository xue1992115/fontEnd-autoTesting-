<template>
  <TodoList />
</template>

<script>
import TodoList from './container/TodoList/TodoList.vue'
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>

<style lang="stylus">
* {
  margin: 0px
  padding: 0px
}
</style>
