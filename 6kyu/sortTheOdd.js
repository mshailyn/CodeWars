// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.





function sortArray(array) {
  let odd = array.filter(num => num % 2 === 1 || num % 2 === -1).sort(function(a, b){return a-b})
  let newArray = []
  let oddNum = 0
  array.forEach((num, i, arr) => {
    if(num % 2 === 0){
      newArray.push(num)
    }else{
      newArray.push(odd[oddNum])
      oddNum++
    }
  })
  return newArray
}