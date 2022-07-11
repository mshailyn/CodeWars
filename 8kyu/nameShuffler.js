//Write a function that returns a string in which firstname is swapped with last name.



function nameShuffler(str){
  let arr = str.split(' ')
  let result = []
  result.push(arr[1],arr[[0]])
  return result.join(' ')
}