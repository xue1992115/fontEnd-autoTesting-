// mock timer
import { timer, timer2 } from "./demo";

// test('timer 函数进行测试', (done) => {
//   timer(() => {
//     expect(1).toBe(1)
//     done()
//   })
// })
// jest.useFakeTimers主要是用于setTimeout这种一步的timer,
// 需要真正的等待延迟的时间
jest.useFakeTimers();
test("timer 函数进行测试", () => {
  const fn = jest.fn();
  timer(fn);
  // jest.runAllTimers(); 可以立即执行，不需要等待时间
  jest.runAllTimers();
  expect(fn).toHaveBeenCalledTimes(1);
});

jest.useFakeTimers();
test("timer2 函数进行测试", () => {
  const fn = jest.fn();
  timer2(fn);
  // jest.runAllTimers(); 可以立即执行，不需要等待时间
  // timer2中有两个定时器
  // jest.runAllTimers();
  // expect(fn).toHaveBeenCalledTimes(2);
  // runOnlyPendingTimers只运行已经创建的timer
  // jest.runOnlyPendingTimers();
  // jest.advanceTimersByTime(3000); 可以任意快进时间
  jest.advanceTimersByTime(3000);
  expect(fn).toHaveBeenCalledTimes(1);
});
