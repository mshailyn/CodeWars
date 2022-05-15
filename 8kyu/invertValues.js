// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives. You can assume that all values are integers. Do not mutate the input array/list.

function invert(array) {
  for(let i = 0; i < array.length; i++){
    array[i] = array[i]*-1;
  }
  return array;
}