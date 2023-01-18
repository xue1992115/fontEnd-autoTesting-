// mock另一种使用方法, 模拟同步请求
// 让jest去模拟demo中的数据，那么jest就回去__mocks__中去寻找
// 注意__mocks__文件夹目录需要和demo是同级别的
jest.mock('./demo')
import { fetchData } from './demo'
test('fetchData 测试', () => {
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})