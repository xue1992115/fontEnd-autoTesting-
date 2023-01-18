import { runCallback, runCallback2, createObject } from "./Counter";
test("测试callback", () => {
  const func = () => {
    return "hello";
  };
  expect(runCallback(func)).toBe("hello");
});
// 上边的测试用例改版如下：
test("测试callback2", () => {
  // jest.fn()是通过jest生成一个mock函数，该mock能捕获函数的调用
  // const func = jest.fn(() => {
  //   return "456";
  // });
  // 或者可以模拟返回值
  const func = jest.fn();
  func.mockReturnValue("dell");
  runCallback(func);
  runCallback(func);
  runCallback(func);
  // toBeCalled表示是否被调用过
  // expect(func).toBeCalled();
  expect(func.mock.calls.length).toBe(3);
  // calls表示的是被调用的次数
  console.log(func.mock.calls.length);
  console.log(func.mock);
});

test.only("测试 createObject", () => {
  const func = jest.fn();
  createObject(func);
  console.log(func.mock);
});
