// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.



function sumOfMinimums(arr) {
  arr.forEach(a => a.sort())
  let sum = 0
  arr.map(a => sum = sum + a[0])
  return sum
}