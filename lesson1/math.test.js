// const math = require("./math.js");
// const { add, minus } = math;
import { add, minus } from "./math";
test("测试加法 3 + 7", () => {
  expect(add(3, 7)).toBe(10);
});
test("测试减法 3 - 7", () => {
  expect(minus(3, 7)).toBe(-4);
});
// math.js导出的模块，必须是commonjs的模块，如果是es6模块则会报错, 想要解决改问题，可以通过babel进行转译一下就可以； 
// 执行 npm run test 那么jest就会寻找以.test.js结尾的文件执行
// jest执行的是单元测试和集成测试以及多个模块测试
