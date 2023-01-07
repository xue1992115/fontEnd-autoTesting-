// jest的命令行工具
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
