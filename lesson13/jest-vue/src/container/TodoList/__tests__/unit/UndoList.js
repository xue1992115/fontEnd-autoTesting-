/* eslint-disable no-undef */
// vue提供的测试工具
import { shallowMount } from '@vue/test-utils'
import UndoList from '../../components/UndoList.vue'
import { findTestWrapper } from '../../../../utils/testUtils'

it('UndoList 初始化时，list为[], count为0，列表内容为空', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [] }
  })
  const countElem = findTestWrapper(wrapper, '[data-test="count"]')
  const listItems = findTestWrapper(wrapper, '[data-test="list"]')
  expect(countElem.at(0).text()).toEqual('0')
  expect(listItems.length).toEqual(0)
})
it('UndoList 初始化时，list为[1,2,3], count为3，列表内容为空', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }] }
  })
  const countElem = findTestWrapper(wrapper, '[data-test="count"]')
  const listItems = findTestWrapper(wrapper, '[data-test="item"]')
  const deleteButtonItems = findTestWrapper(wrapper, '[data-test="delete-button"]')
  expect(countElem.at(0).text()).toEqual('3')
  expect(listItems.length).toEqual(3)
  expect(deleteButtonItems.length).toEqual(3)
})
it('UndoList 删除按钮被点击时, 向外触发删除事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }] }
  })
  const deleteButton = findTestWrapper(wrapper, '[data-test="delete-button"]').at(1)
  deleteButton.trigger('click')
  expect(wrapper.emitted().delete).toBeTruthy()
})
it('UndoList item被点击的时候, 列表显示输入框，其他的item正常显示内容', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [{ status: 'div', value: 1 }, { status: 'div', value: 2 }, { status: 'div', value: 3 }] }
  })
  const clickItem = findTestWrapper(wrapper, '[data-test="item"]').at(1)
  clickItem.trigger('click')
  expect(wrapper.emitted().changeStatus).toBeTruthy()
})
it('列表中一个为input框，其他的为展示div', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [{ status: 'div', value: 1 }, { status: 'input', value: 2 }, { status: 'div', value: 3 }] }
  })
  const inputItem = findTestWrapper(wrapper, '[data-test="input"]')
  expect(inputItem.at(0).element.value).toBe('2')
})
it('input框失去焦点的时候，向外触发reset事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [{ status: 'div', value: 1 }, { status: 'input', value: 2 }, { status: 'div', value: 3 }] }
  })
  const inputItem = findTestWrapper(wrapper, '[data-test="input"]').at(0)
  inputItem.trigger('blur')
  expect(wrapper.emitted().reset).toBeTruthy()
})
it('input框内容变化时，触发change事件', () => {
  const wrapper = shallowMount(UndoList, {
    propsData: { list: [{ status: 'div', value: 1 }, { status: 'input', value: 2 }, { status: 'div', value: 3 }] }
  })
  const inputItem = findTestWrapper(wrapper, '[data-test="input"]').at(0)
  inputItem.trigger('change')
  expect(wrapper.emitted().change).toBeTruthy()
  expect(wrapper.emitted().change[0][0]).toEqual({
    value: '2',
    index: 1
  })
})
