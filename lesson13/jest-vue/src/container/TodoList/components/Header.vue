<template>
    <div class="header">
      <div class="header-content">
        TodoList: <input data-test="input" v-model="inputValue" @keyup.enter="changeInput" class="input" placeholder="请添加todo itemw">
      </div>
    </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Header',
  data () {
    return {
      inputValue: '123'
    }
  },
  methods: {
    changeInput () {
      if (this.inputValue) {
        this.$emit('add', this.inputValue)
        this.inputValue = ''
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.header {
  background: #666
  line-height: 60px
  &-content {
    width: 600px
    margin: 0 auto
    color: #333
    font-size: 24px
    .input {
      float: right
      width: 300px
      line-height: 24px
      outline: none
      margin-top: 16px
      color: #333
      font-size: 30px
    }
  }
}
</style>
