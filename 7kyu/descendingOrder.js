//Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.



function descendingOrder(n){
  let newArr = Array.from(String(n), Number)
  newArr.sort((a, b) => (a > b ? -1 : 1));
  let result = newArr.join('')
  return parseInt(result)
}