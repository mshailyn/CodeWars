//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// 7kyu - exesOhs.js

function XO(str) {
  let x = 0
  let o = 0
  str.toLowerCase().split('').forEach(a => {
    if(a === 'x'){
      x++
    }else if(a === 'o'){
      o++
    }
  })
  return x === o ? true : false
}