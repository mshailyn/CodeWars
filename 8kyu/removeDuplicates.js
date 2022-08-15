//Define a function that removes duplicates from an array of numbers and returns it as a result.

//The order of the sequence has to stay the same.

//8kyu - removeDuplicates.js


function distinct(a) {
  return a.filter((e,i,arr) => arr.indexOf(e) === i)
}