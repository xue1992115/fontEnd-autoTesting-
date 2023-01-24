<template>
    <div class="undoList">
      <div data-test="count">{{ list.length }}</div>
      <ul>
        <li v-for="item, index in list" :key="index" data-test="item"
        @click="changeStatus(index)"
        >
          <input type="text" v-if="item.status === 'input'" :value="item.value" data-test="input" @blur="blur(index)" @change="(e) => changeValue({ value: e.target.value, index })">
          <span v-else>{{item.value}}</span>
          <span data-test="delete-button" @click="deleteItem(index)" style="marginLeft: 20px">-</span>
        </li>
      </ul>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'UndoList',
  props: ['list'],
  methods: {
    deleteItem (index) {
      this.$emit('delete', index)
    },
    changeStatus (index) {
      this.$emit('changeStatus', index)
    },
    blur (index) {
      this.$emit('reset', index)
    },
    changeValue ({ value, index }) {
      this.$emit('change', { value, index })
    }
  }
}
</script>

<style lang="stylus" scoped>
</style>
