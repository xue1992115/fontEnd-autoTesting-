import { generateConfig, generateConfig2 } from "./demo";
// 快照
test("测试 generateConfig函数", () => {
  expect(generateConfig()).toMatchSnapshot({
    data: expect.any(Date),
  });
});
// 快照 生成的快照不会新生成一个文件，而是添加到测试用例下方
// test("测试 generateConfig2函数", () => {
//   expect(generateConfig2()).toMatchInlineSnapshot({
//     data: expect.any(Date),
//   });
// });
