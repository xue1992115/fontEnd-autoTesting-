/* eslint-disable no-undef */
// vue提供的测试工具
import { shallowMount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
// import Header from '../../components/Header.vue'
import UndoList from '../../components/UndoList.vue'
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
  // 该写法涉及到两个组件间的交互，属于集成测试
  // const item = '买菜'
  // const wrapper = shallowMount(TodoList)
  // // 这里应该使用findComponent查找Header组件
  // const header = wrapper.findComponent(Header)
  // header.vm.$emit('add', item)
  // const undoList = wrapper.vm.$data.undoList
  // expect(undoList).toEqual([item])

  // 以下是单元测试，单元测试主要是针对单个组件写的测试用例
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }]
  })
  wrapper.vm.addUndoItem(4)
  expect(wrapper.vm.$data.undoList).toEqual([{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }, { status: 'div', value: 4 }])
})
it('TodoList调用 UndoList，应该传递list参数', () => {
  const wrapper = shallowMount(TodoList)
  const undoList = wrapper.findComponent(UndoList)
  const list = undoList.props('list')
  expect(list).toBeTruthy()
})
it('TodoItem 监听UndoList中触发的delete事件，然后执行deleteUndoItem时，应该减少一条内容', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }]
  })
  wrapper.vm.deleteUndoItem(1)
  expect(wrapper.vm.$data.undoList).toEqual([{ status: 'div', value: 1 }, { status: 'div', value: 3 }])
})
it('TodoItem 监听UndoList中触发的changeStatus事件，然后执行changeItemStatus时，应该有一个input框，其他的不变', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }]
  })
  wrapper.vm.changeItemStatus(1)
  expect(wrapper.vm.$data.undoList).toEqual([{ status: 'div', value: 1 }, { status: 'input', value: 2 }, { status: 'div', value: 3 }])
})

it('TodoItem 监听UndoList中触发的reset事件，然后执行reset时，所有的input框变成div', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [{ status: 'div', value: 1 }, { status: 'input', value: 2 }, { status: 'div', value: 3 }]
  })
  wrapper.vm.reset(1)
  expect(wrapper.vm.$data.undoList).toEqual([{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }])
})

it('TodoItem 监听UndoList中触发的change事件，然后执行changeValue时，input value变成输入的值', () => {
  const wrapper = shallowMount(TodoList)
  wrapper.setData({
    undoList: [{ status: 'div', value: 1 }, { status: 'input', value: 2 }, { status: 'div', value: 3 }]
  })
  wrapper.vm.reset(1)
  expect(wrapper.vm.$data.undoList).toEqual([{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }])
})
