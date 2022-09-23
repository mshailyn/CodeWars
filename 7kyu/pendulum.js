// Given an array/list [] of n integers , Arrange them in a way similar to the to-and-fro movement of a Pendulum

// The Smallest element of the list of integers , must come in center position of array/list.

// The Higher than smallest , goes to the right .
// The Next higher number goes to the left of minimum number and So on , in a to-and-fro manner similar to that of a Pendulum.



function pendulum(values) {
  let ans = []
  values.sort((a,b) => a - b)
  for(let i = 0; i < values.length; i ++){
    i % 2 === 0 ? ans.unshift(values[i]) : ans.push(values[i])
  }
    return ans // Do your magic!
}