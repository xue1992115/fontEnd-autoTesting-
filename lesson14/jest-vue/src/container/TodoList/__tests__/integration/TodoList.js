/* eslint-disable no-undef */
import { mount } from '@vue/test-utils'
import TodoList from '../../TodoList.vue'
import { findTestWrapper } from '../../../../utils/testUtils'
import store from '../../../../store'
// 集成测试是基于用户的测试行为去编写测试用例的，用户的测试行为就是一个story
// 该测试用例中trigger触发模拟事件是异步的，所以需要async await
it(
`
1. 用户会在输入框输入内容
2. 用户会点击回车按钮
3. 列表中应该会增加用户输入的内容
`, async () => {
  const wrapper = mount(TodoList, {
    global: {
      plugins: [store]
    }
  })
  const inputBox = findTestWrapper(wrapper, '[data-test="header-input"]').at(0)
  const content = 'hxx'
  inputBox.setValue(content)
  inputBox.trigger('change')
  await inputBox.trigger('keyup.enter')
  const listItems = findTestWrapper(wrapper, '[data-test="list-item"]')
  expect(listItems.length).toBe(2)
})
it(
  `
  1. 用户进入页面时，请求远程数据
  2. 列表应该展示远程请求的数据
  `, (done) => {
    const wrapper = mount(TodoList, {
      global: {
        plugins: [store]
      }
    })
    // 针对异步的代码，可以延迟去获取渲染, 或者使用$nextTick
    // 这边使用setTimeout的延迟时间不能超过5s
    setTimeout(() => {
      const listItems = findTestWrapper(wrapper, '[data-test="list-item"]')
      expect(listItems.length).toBe(2)
      done()
    }, 4000)
  })

it(
`
1. 用户进入页面时，请求远程数据
2. 列表应该展示远程请求的数据
`, (done) => {
  const wrapper = mount(TodoList, {
    global: {
      plugins: [store]
    }
  })
  // 针对异步的代码，可以延迟去获取渲染, 或者使用$nextTick
  // 这边使用setTimeout的延迟时间不能超过5s
  setTimeout(() => {
    const listItems = findTestWrapper(wrapper, '[data-test="list-item"]')
    expect(listItems.length).toBe(2)
    done()
  }, 4000)
})
