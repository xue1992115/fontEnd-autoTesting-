<template>
    <div>
        <Header @add="addUndoItem"></Header>
        <ul>
            <li v-for="item, idx in undoList" :key="idx">{{item}}</li>
        </ul>
    </div>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'TodoList',
  components: {
    Header
  },
  data () {
    return {
      undoList: []
    }
  },
  methods: {
    addUndoItem (item) {
      this.undoList.push(item)
    }
  }
}
</script>

<style lang="stylus">

</style>
