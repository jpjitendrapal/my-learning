/*
Given an array arr[0 .. n-1] of distinct integers, the task is to find a local minimum in it. We say that an element arr[x] is a local minimum if it is less than both its neighbors. 

For corner elements, we need to consider only one neighbor for comparison.
There can be more than one local minima in an array, we need to find one of them.
Examples: 

Input: arr[] = {9, 6, 3, 14, 5, 7, 4};
Output: Index of local minima is 2
The output prints index of 3 because it is 
smaller than both of its neighbors. 
Note that indexes of elements 5 and 4 are 
also valid outputs.

Input: arr[] = {23, 8, 15, 2, 3};
Output: Index of local minima is 1

Input: arr[] = {1, 2, 3};
Output: Index of local minima is 0

Input: arr[] = {3, 2, 1};
Output: Index of local minima is 2
*/
function getLocalMinima(arr) {
  const ans = binarySearch(arr, 0, arr.length);
  console.log(ans);
}
function binarySearch(arr, start, end) {
  let mid = start + (end - start) / 2;
  if (mid === 0 && arr[mid] < arr[mid + 1]) {
    return mid;
  } else if (mid === arr.length && arr[mid] < arr[mid - 1]) {
    return mid;
  } else if (arr[mid - 1] > arr[mid] && arr[mid] < arr[mid + 1]) {
    return mid;
  } else if (arr[mid - 1] < arr[mid]) {
    return binarySearch(arr, start, mid - 1);
  } else if (arr[mid] > arr[mid + 1]) {
    return binarySearch(arr, mid + 1, end);
  }
}
