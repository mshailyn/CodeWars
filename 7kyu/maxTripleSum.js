// Task
// Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

// Notes :
// Array/list size is at least 3 .

// Array/list numbers could be a mixture of positives , negatives and zeros .

// Repetition of numbers in the array/list could occur , So (duplications are not included when summing).





function maxTriSum(numbers){
  numbers = numbers.sort((a,b) => b - a).filter((a,i,arr) => a !== arr[i+1])
  return numbers[0] + numbers[1] + numbers[2]
}