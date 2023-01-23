/* eslint-disable no-undef */
// vue提供的测试工具
import { shallowMount } from '@vue/test-utils'
import Header from '../../components/Header.vue'
import { findTestWrapper } from '../../../../utils/testUtils'
// 使用快照功能，就是当Header组件样式或者功能放生改变的时候，做一个提醒
it('Header 样式发生改变，做提示', () => {
  const wrapper = shallowMount(Header)
  expect(wrapper).toMatchSnapshot()
})
// 单元测试用例
it('Header 包含input框', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, '[data-test="input"]')
  // wrapper.exists api表示是否存在这个节点
  expect(input.exists()).toBe(true)
})
// 也可以不添加describe
it('Header 包含input框 初始值为空的', () => {
  const wrapper = shallowMount(Header)
  const inputValue = wrapper.vm.$data.inputValue
  // wrapper.exists api表示是否存在这个节点
  expect(inputValue).toBe('123')
})

// 测试修改input框中的值
it('Header 中input框值发生变化，数据应该跟着变化', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, '[data-test="input"]')
  input.setValue('hxx')
  const inputValue = wrapper.vm.$data.inputValue
  // wrapper.exists api表示是否存在这个节点
  expect(inputValue).toBe('hxx')
})
// 当用户什么都没有输入时候，点击回车按键
// 希望不触发add事件
it('Header中input框输入回车无内容时，无反应', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, '[data-test="input"]')
  input.setValue('')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeFalsy()
})
// 当用户输入内容，点击回车按键， 触发事件
it('Header中input框输入回车有内容时，触发事件', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, '[data-test="input"]')
  input.setValue('hxx')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
})
// 当用户输入内容，点击回车按键， 触发事件并且清空内容
it('Header中input框输入回车有内容时，触发事件， 同时清空inputValue', () => {
  const wrapper = shallowMount(Header)
  const input = findTestWrapper(wrapper, '[data-test="input"]')
  input.setValue('hxx')
  input.trigger('keyup.enter')
  expect(wrapper.emitted().add).toBeTruthy()
  expect(wrapper.vm.$data.inputValue).toBe('')
})
