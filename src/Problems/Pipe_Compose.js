/*
Pipe to the rescue!
Instead of jamming functions within functions or creating a bunch of intermediate variables, let’s pipe all the things!
*/

const getName = (person) => person.name;
const uppercase = (string) => string.toUpperCase();
const get6Characters = (string) => string.substring(0, 6);
const reverse = (string) => {
  let result;
  // console.log("inside reverse", string);
  result = string.split("").reverse().join("");
  return result;
};

function pipe(...args) {
  return function (data) {
    let result = data;
    for (let i = 0; i < args.length; i++) {
      result = args[i](result);
    }
    return result;
  };
}
let result;
//result = pipe(
//   getName,
//   uppercase,
//   get6Characters,
//   reverse
// )({ name: "Buckethead" });

// this can be solved in just one line using the reduce method
const pipe_v2 = (...fns) => (data) => fns.reduce((acc, fn) => fn(acc), data);
result = pipe_v2(
  getName,
  uppercase,
  get6Characters,
  reverse
)({ name: "Buckethead" });
console.log(result);
export default pipe;

// new implementation
// Compose
/*
What about compose()?
It’s just pipe in the other direction.

So if you wanted the same result as our pipe above, you’d do the opposite.

compose(
  reverse,
  get6Characters,
  uppercase,
  getName
)({ name: 'Buckethead' });
Notice how getName is last in the chain and reverse is first?
*/
