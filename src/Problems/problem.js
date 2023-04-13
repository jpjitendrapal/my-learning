//Sorting array of objects with two keys
function sortingArrayOfObj() {
  let ar = [
    { a: 3, b: 5 },
    { a: 5, b: 10 },
    { a: 1, b: 3 },
    { a: 10, b: 16 }
  ];

  ar.sort((item1, item2) => {
    // console.log(item1, item2);
    return item1.a - item2.a;
  });
  console.log(JSON.stringify(ar));
}
// sortingArrayOfObj();

function TreeProblems() {
  function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
  /*
            1
      2           3
  4       5   6     7
  */
  let tree = new Node(1);
  tree.left = new Node(2);
  tree.right = new Node(3);
  tree.left.left = new Node(4);
  tree.left.right = new Node(5);
  tree.right.left = new Node(6);
  tree.right.right = new Node(7);
  // console.log(tree);

  function levelOrderTraversal(root, level, result) {
    if (!root) return;
    if (!result[level]) result[level] = [];
    result[level].push(root.val);
    levelOrderTraversal(root.left, level + 1, result);
    levelOrderTraversal(root.right, level + 1, result);
  }
  function printTree(root) {
    let result = [];
    levelOrderTraversal(root, 0, result);
    console.log(result);
  }
  function zigZagTraversal(root) {
    let result = [];
    levelOrderTraversal(tree, 0, result);
    return result.map((item, index) => {
      if (index % 2) {
        return item.reverse();
      }
      return item;
    });
  }

  function inOrderTraversal(root) {
    if (!root) return;
    inOrderTraversal(root.left);
    console.log(root.val);
    inOrderTraversal(root.right);
  }

  function reverseLeftRight(root) {
    if (!root) return;
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    reverseLeftRight(root.left);
    reverseLeftRight(root.right);
  }

  reverseLeftRight(tree);
  printTree(tree);
}
// TreeProblems();

// currying function
// sum(1)(2)(3)(4)

function curryFn() {
  let result = 0;
  return function sum(...args) {
    if (args.length) {
      result += args.reduce((a, b) => a + b);
      return sum;
    } else {
      return result;
    }
  };
}

// let suma = curryFn();
// console.log(suma(1)(2)(3)(4)());
// console.log(suma(1)(2, 3, 2, 1, 10)(4, 5, 3)());

// lodash get method lodash.get
/* 
var _ = require('lodash');
 path = ['a', '0', 'b', 'c'] OR 'a[0].b.c'
var result = _.get(object, 'a[0].b.c');
 */

function lodash_get(obj, path, defaultVal) {
  let parts;
  if (typeof path === "string") {
    parts = path.split(/[\]\[\.]/).filter((x) => x);
  } else {
    parts = path;
  }
  let result = obj;
  for (let key in parts) {
    let nextObj = result[parts[key]];
    if (nextObj) {
      result = nextObj;
    } else {
      result = defaultVal;
      break;
    }
  }
  // console.log(parts);
  return result;
}
var object = { a: [{ b: { c: 3 } }] };
console.log(lodash_get(object, ["a", "0", "b", "c"], 100));
