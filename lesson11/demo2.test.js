// ES6中的类测试
// 通过对类的Mock理解单元测试和集成测试
jest.mock("./demo");
import Demo from "./demo";
import { demoFunction } from "./demo2";

test("测试demoFunction方法", () => {
  demoFunction();
  expect(Demo).toHaveBeenCalled();
  expect(Demo.mock.instances[0].a).toHaveBeenCalled();
  expect(Demo.mock.instances[0].b).toHaveBeenCalled();
});
