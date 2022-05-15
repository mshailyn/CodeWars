// You are given an odd-length array of integers, in which all of them are the same, except for one single number.

// Complete the method which accepts such an array, and returns that single different number.

// The input array will always be valid! (odd-length >= 3)



function stray(numbers) {
  numbers.sort((a,b) => a - b)
  if (numbers[0] === numbers[1]){
    return numbers[numbers.length - 1]
  }else{
    return numbers[0]
  }
}