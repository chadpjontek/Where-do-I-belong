// Returns the lowest index at which a number (second argument) should be inserted into an array (first argument) once it has been sorted. The returned value is a number.
function getIndexToIns(arr, num) {
  // push num into arr then sort
  arr.push(num);
  arr.sort(function(a, b) {
  return a - b;
});
  //find first occurrence of num in arr
   return arr.indexOf(num);
  }
// examples
getIndexToIns([10, 20, 30, 40, 50], 35); // returns 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // returns 2.
getIndexToIns([40, 60], 50); // returns 1.
getIndexToIns([3, 10, 5], 3); // returns 0.
getIndexToIns([5, 3, 20, 3], 5); // returns 2.
getIndexToIns([2, 20, 10], 19); // returns 2.
getIndexToIns([2, 5, 10], 15); // returns 3.