//Write a function that checks if a given string (case insensitive) is a palindrome.



function isPalindrome(x) {
  x = x.toLowerCase()
  let reverse = x.split('').reverse().join('')
  return x === reverse ? true : false
}