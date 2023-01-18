// jest中的mock
export const runCallback = (callback) => {
  return callback();
};
export const runCallback2 = (callback) => {
  callback();
};
export const createObject = (classItem) => {
  new classItem();
};
