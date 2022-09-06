// Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, your task is to find the sum of the minimum values in each row.



function sumOfMinimums(arr) {
  arr.forEach(a => a.sort((b,c) => b-c))
  let ans= arr.map(a => a = a[0])
  return ans.reduce((a, b) => a + b, 0)
}