// mock数据深入学习
import Axios from 'axios'
import { fetchData } from './demo'
jest.mock('axios')
test('fetchData 测试', () => {
  // 使用axios模拟异步请求，否则无法发送请求；
  Axios.get.mockResolvedValue({
    data: "(function() { return '123'})()"
  });
  return fetchData().then(data => {
    expect(eval(data)).toEqual('123')
  })
})