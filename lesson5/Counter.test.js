// jest的钩子函数，钩子函数类似vue中的生命周期函数，在特定的时间，就会被自动的执行
import Counter from "./Counter";
// const counter = new Counter();
// 测试class,首先需要实例化对象
// jest推荐测试之前的一些准备工作可以放在钩子函数中
// beforeAll(所有测试用例之前执行)/afterAll（所有的测试用例之后执行）
// 此时存在的问题，就是counter实例两个测试用例是共用的，解决办法使用另一个钩子函数beforeEach
// afterEach是在测试用例执行之后，进行执行的
// describe可以进行划分，这样每个钩子函数就会存在作用域
let counter = null;
beforeAll(() => {
  console.log("beforeAll");
  //   counter = new Counter();
});
// beforeEach就是每次执行测试用例都会执行的
beforeEach(() => {
  console.log("beforeEach");
  counter = new Counter();
});
describe("测试couner中的测试用例", () => {
  test("addOne方法", () => {
    counter.addOne();
    expect(counter.number).toBe(1);
  });
  test("minusOne方法", () => {
    counter.minueOne();
    expect(counter.number).toBe(-1);
  });
});

afterAll(() => {
  console.log("afterAll");
});
