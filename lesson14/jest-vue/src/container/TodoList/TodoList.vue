<template>
    <div>
        <Header @add="addUndoItem"></Header>
        <UndoList :list="undoList"  @delete="deleteUndoItem" @changeStatus="changeItemStatus" @reset="reset" @change="changeValue"></UndoList>
    </div>
</template>

<script>
import Header from './components/Header.vue'
import UndoList from './components/UndoList.vue'
import axios from 'axios'
export default {
  name: 'TodoList',
  components: {
    Header,
    UndoList
  },
  data () {
    return {
      undoList: []
    }
  },
  mounted () {
    this.getData()
  },
  methods: {
    addUndoItem (item) {
      this.undoList.push({ status: 'div', value: item })
    },
    deleteUndoItem (index) {
      this.undoList.splice(index, 1)
    },
    changeItemStatus (index) {
      this.undoList.forEach((item, idx) => {
        if (index === idx) {
          item.status = 'input'
        } else {
          item.status = 'div'
        }
      })
    },
    reset (index) {
      this.undoList[index].status = 'div'
    },
    changeValue ({ value, index }) {
      if (index !== undefined) {
        this.undoList[index].value = value
      }
    },
    async getData () {
      const res = await axios.get('/getUndoList.json')
      this.undoList = res
    }
  }
}
</script>

<style lang="stylus">

</style>
