/*eslint no-extend-native: "off"*/
// reduce polyfill
Array.prototype.myreduce = function (fn, initialVal) {
  let result = initialVal;
  let ar = this;
  for (let i = 0; i < ar.length; i++) {
    result = fn(result, ar[i], i, ar);
  }
  return result;
};

// Promise.all polyfill
// Promise.all([p1,p2,p3]) array response [res1, res2, res3] OR error

Promise.myall = function (promiseList = []) {
  let result = [];
  let count = 0;
  const len = promiseList.length;
  return new Promise((resolve, reject) => {
    for (let i = 0; i < promiseList.length; i++) {
      promiseList[i]
        .then((res) => {
          result[i] = res;
          count++;
          if (count >= len) {
            resolve(result);
          }
        })
        .catch((err) => {
          reject(err);
        });
    }
  });
};
// sample to execute the code
// function createPromises() {
//   let p1 = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("p1 after 2 sec");
//     }, 2000);
//   });
//   let p2 = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("p2 after 3 sec");
//     }, 3000);
//   });
//   let p3 = new Promise((res, rej) => {
//     setTimeout(() => {
//       rej("p3 after 4 sec");
//     }, 4000);
//   });
//   let p4 = new Promise((res, rej) => {
//     setTimeout(() => {
//       res("p4 after 5 sec");
//     }, 5000);
//   });
//   return [p1, p2, p3, p4];
// }

// Promise.myall(createPromises())
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.warn(err);
//   });

//

function MyPromise(fn) {
  this.status = "Pending";
  const context = this;
  fn(this.resolve.bind(context), this.reject.bind(context));
  return {
    then: context.then.bind(context),
    catch: context.catch.bind(context)
  };
}
MyPromise.prototype.resolve = function (data) {
  this.status = "Fulfill";
  this.thenFn(data);
};
MyPromise.prototype.reject = function (data) {
  this.status = "Fail";
  if (this.catchFn) {
    this.catchFn(data);
  } else {
    throw new Error(data);
  }
};
MyPromise.prototype.then = function (fn) {
  this.thenFn = fn;
  return this;
};
MyPromise.prototype.catch = function (fn) {
  this.catchFn = fn;
  return this;
};

new MyPromise((res, rej) => {
  setTimeout(() => {
    rej("p4 after 4 sec");
  }, 4000);
})
  .then((res) => {
    console.log("Test p1: ", res);
  })
  .catch((err) => {
    console.warn(err, "errrrrrr");
  });

function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.getName = function () {
  return this.name;
};
Person.prototype.getAge = function () {
  return this.age;
};
Person.prototype.setName = function (newName) {
  this.name = newName;
};

function Employee(name, age, id) {
  Person.call(this, name, age);
  this.id = id;
}
Object.setPrototypeOf(Employee.prototype, Person.prototype);
// Employee.prototype.Employee = Employee;

// let p1 = new Employee("JP", 35, 101);
// p1.setName("Jitendra");
// console.log("Name: ", p1.getName(), " Age: ", p1.getAge());
// console.log(p1 instanceof Person);
