/* eslint-disable no-undef */
// vue提供的测试工具
import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import Header from '../../components/Header.vue'
it('TodoItem 初始化时，undoList应该为空', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([])
})
// it('TodoItem 执行addItem时，应该增加一条内容', () => {
//   const wrapper = shallowMount(TodoList)
//   // 模拟增加一条内容
//   wrapper.vm.addUndoItem('买菜')
//   const undoList = wrapper.vm.$data.undoList
//   expect(undoList).toEqual(['买菜'])
// })
it('TodoItem 监听Header中触发的add事件，然后执行addItem时，应该增加一条内容', () => {
  const item = '买菜'
  const wrapper = shallowMount(TodoList)
  // 这里应该使用findComponent查找Header组件
  const header = wrapper.findComponent(Header)
  header.vm.$emit('add', item)
  const undoList = wrapper.vm.$data.undoList
  expect(undoList).toEqual([item])
})
