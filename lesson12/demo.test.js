import addDivToBody from "./demo";
import $ from "jquery";
test("测试addDivToBody", () => {
  addDivToBody();
  addDivToBody();
  expect($("body").find("div").length).toBe(2);
  //   expect(demo.init(1, 2)).toBe("12");
});
// node不具备dom
// jest在node环境下自己模拟了一套dom 成为jest-dom