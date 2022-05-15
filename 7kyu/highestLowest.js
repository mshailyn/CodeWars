// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.




function highAndLow(numbers){
  let arr = numbers.split(' ')
  arr.sort((a,b) => a-b)
  return arr[arr.length-1] + " " + arr[0]
}