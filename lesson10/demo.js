export const timer = (callback) => {
  setTimeout(() => {
    callback();
  }, 8000);
};

export const timer2 = (callback) => {
  setTimeout(() => {
    callback();
    setTimeout(() => {
      callback();
    }, 3000);
  }, 3000);
};
