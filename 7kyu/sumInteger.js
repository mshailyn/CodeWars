//Debug   function getSumOfDigits that takes positive integer to calculate sum of it's digits. Assume that argument is an integer.



function getSumOfDigits(integer) {
  let arr = integer.toString().split('')
  return arr.reduce((a,c) => a + Number(c), 0)
}