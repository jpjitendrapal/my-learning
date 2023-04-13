function testMyAll() {
  const p1 = Promise.resolve("Ok, promise 1");
  const p2 = new Promise((resolve, rej) => {
    setTimeout(() => {
      resolve("Promise 2 resolved");
    }, 1000);
  });
  const p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Promise 3 resolved");
    }, 500);
  });

  Promise.myAll([p1, p2, p3]).then((res) => console.log(res));
}

Promise.myAll = function (arr) {
  const result = [];
  let count = 0;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < arr.length; i++) {
      arr[i]
        .then((res) => {
          result[i] = res;
          count++;
          if (count === arr.length) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};

export default testMyAll;
