// You get an array of numbers, return the sum of all of the positives ones.

// Example [1,-4,7,12] => 1 + 7 + 12 = 20



function positiveSum(arr) {
  return arr.filter(a => a > 0).reduce((a,c) => a + c, 0)
}