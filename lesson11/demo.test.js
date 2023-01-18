// ES6中的类测试
// 通过对类的Mock理解单元测试和集成测试
import Demo from "./demo";
let demo = null;
beforeAll(() => {
  demo = new Demo();
});

test("测试Demo init方法", () => {
  //   expect(demo.init(1, 2)).toBe("12");
});
