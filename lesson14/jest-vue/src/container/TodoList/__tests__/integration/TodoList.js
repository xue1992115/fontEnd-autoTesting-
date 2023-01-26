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
    store
  })
  const inputBox = findTestWrapper(wrapper, '[data-test="header-input"]').at(0)
  const content = 'hxx'
  inputBox.setValue(content)
  inputBox.trigger('change')
  await inputBox.trigger('keyup.enter')
  const listItems = findTestWrapper(wrapper, '[data-test="list-item"]')
  expect(listItems.length).toBe(1)
})
