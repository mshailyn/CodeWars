// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.



function findOdd(A) {
  let result
  A.forEach( a => { A.filter(x => x === a).length % 2 === 1 ? result = a : 0
   });
  return result
}