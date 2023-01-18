// 如何测试异步代码
import {
  fetchData,
  fetchData2,
  fetchData3,
  fetchData4,
  fetchData5,
  fetchData6,
  fetchData7,
  fetchData8,
  fetchData9,
} from "./fetchData";
// 该测试用例的问题在于 没有跑到except语句中，因此修改接口地址，该测试用例依然跑通了
// test("fetchData返回结果测试", () => {
//   fetchData((data) => {
//     expect(data).toEqual({
//       success: true
//     });
//   });
// });
// 修改测试用例如下：
// 增加一个done参数，在调回函数中执行done函数，才表示执行完成
test("fetchData返回结果测试", (done) => {
  fetchData((data) => {
    expect(data).toEqual({
      success: true,
    });
    done();
  });
});

test("fetchData2返回结果测试", () => {
  return fetchData2().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});

test("fetchData2返回结果测试", () => {
  return fetchData2().then((response) => {
    expect(response.data).toEqual({
      success: true,
    });
  });
});

test("fetchData3返回结果测试404", () => {
  // assertions表示至少执行1次，解决如果接口正确的话，就不会执行这个里边的expect语句
  expect.assertions(1);
  return fetchData3().catch((e) => {
    expect(e.toString().indexOf("404") > -1).toBe(true);
  });
});
test("fetchData4返回结果测试", () => {
  return expect(fetchData4()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
test("fetchData5返回结果测试404", () => {
  return expect(fetchData5()).rejects.toThrow();
});
test("fetchData6返回结果测试", async () => {
  await expect(fetchData6()).resolves.toMatchObject({
    data: {
      success: true,
    },
  });
});
test("fetchData7返回结果测试404", async () => {
  await expect(fetchData7()).rejects.toThrow();
});
test("fetchData8返回结果测试", async () => {
  const response = await fetchData8();
  expect(response.data).toEqual({
    success: true,
  });
});
test("fetchData9返回结果测试", async () => {
  expect.assertions(1);
  try {
    await fetchData9();
  } catch (error) {
    //缺点，如果是正确的话，这边就catch不住了，因此需要expect.assertions(1)
    expect(error.toString()).toEqual(
      "Error: Request failed with status code 404"
    );
  }
});
