// 本节课学习 匹配器
// （1）首先进行jest 自动检测的配置, jest --watchAll 监听说有的文件的变动
// （2）toBe匹配器测试结果相同
//  (3)toEqual匹配器 测试内容相同
// （4）toBeNull匹配器
// （5）toBeUNdefined匹配器 这里的匹配是严格进行匹配的
// （6）toBeTruthy匹配器是一个判断真值的匹配器
// （7）toBeFalsy匹配器是一个判断假值的匹配器
// （8）toBeFalsy匹配是一个判断假值的匹配器
// （9）not匹配非
// 和数字相关的匹配器
// （10）toBeGreaterThan 比大小
// （11）toBeGreaterThanOrEqual 比大小
// （12）toBeLessThan 比大小
// （13）toBeLessThanOrEqual 比大小
// （14）toBeCloseTo比大小
// String相关的
// （15）toMatch
// Array，Set
// (16) toContain 是否包含某一项
// 异常情况的匹配器
// （17）toThrow
// 其他的匹配器可以学习官网上
// https://www.jestjs.cn/
test("测试10 与10匹配", () => {
  // toBe 匹配器 matchers
  expect(10).toBe(10);
});
test("测试内容对象相同", () => {
  // toEqual 匹配器 matchers
  const a = {
    one: 1,
  };
  expect(a).toEqual({ one: 1 });
});
test("测试toBeNull匹配器", () => {
  // toBeNull 匹配器 matchers
  const a = null;
  expect(a).toBeNull();
});
test("测试toBeUndefined匹配器", () => {
  // toBeUndefined 匹配器 matchers
  const a = undefined;
  expect(a).toBeUndefined();
});
test("测试toBeTruthy匹配器", () => {
  // toBeTruthy 匹配器 matchers
  const a = 1;
  expect(a).toBeTruthy();
});
test("测试toBeFalsy匹配器", () => {
  // toBeFalsy 匹配器 matchers
  const a = false;
  expect(a).toBeFalsy();
});
test("测试not匹配器", () => {
  // toBeFalsy 匹配器 matchers
  const a = true;
  expect(a).not.toBeFalsy();
});
test("测试toBeGreaterThan匹配器", () => {
  // toBeFalsy 匹配器 matchers
  const a = 10;
  expect(a).toBeGreaterThan(9);
});
test("测试toBeLessThan匹配器", () => {
  // toBeFalsy 匹配器 matchers
  const a = 10;
  expect(a).toBeLessThan(11);
});
test("测试toBeLessThanOrEqual匹配器", () => {
  // toBeFalsy 匹配器 matchers
  const a = 10;
  expect(a).toBeLessThanOrEqual(10);
});
test("测试toBeCloseTo匹配器", () => {
  // toBeFalsy 匹配器 matchers
  const a = 0.1;
  const b = 0.2;
  expect(a + b).toBeCloseTo(0.3);
});

test("测试toMatch匹配器", () => {
  // toMatch 匹配器 matchers
  const a = "https://baidu.com";
  expect(a).toMatch("baidu");
  expect(a).toMatch(/baidu/);
});
test("测试toMatch匹配器", () => {
  // toMatch 匹配器 matchers
  const a = "https://baidu.com";
  expect(a).toMatch("baidu");
  expect(a).toMatch(/baidu/);
});
test("测试toContain匹配器", () => {
  // toContain 匹配器 matchers
  const arr = ["dell", "lee", "imooc"];
  const data = new Set(arr);
  expect(data).toContain("lee");
});
// 异常
const throwNewErrorFunc = () => {
  throw new Error("This is a new Error");
};
test("测试toThrow匹配器", () => {
  // toThrow 匹配器 matchers
  expect(throwNewErrorFunc).toThrow("This is a new Error");
});
