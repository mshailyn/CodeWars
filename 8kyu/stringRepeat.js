// Write a function that accepts an integer n and a string s as parameters, and returns a string of s repeated exactly n times.



function repeatStr (n, s) {
  let arr = []
  for(let i = 0; i < n; i++){
    arr.push(s)
  }
  return arr.join('');
}