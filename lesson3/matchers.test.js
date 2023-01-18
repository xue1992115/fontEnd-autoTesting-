// jest的命令行工具
//  › Press f to run only failed tests. 只运行失败的测试用例模式
//  › Press o to only run tests related to changed files. 只运行修改文件的测试用例,这里要结合git仓库进行检测哪些文件修改了， 或者jest --watch 默认是进行o模式
//  › Press p to filter by a filename regex pattern.  过滤模式 过滤文件名称
//  › Press t to filter by a test name regex pattern. 过滤模式 选择器
//  › Press q to quit watch mode. // 退出对代码的监控
//  › Press Enter to trigger a test run.
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
