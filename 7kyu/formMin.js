// Given a list of digits, return the smallest number that could be formed from these digits, using the digits only once (ignore duplicates).



function minValue(values){
  let ans = values.sort((a,b)=> a-b).filter((a,i,arr)=> a !== arr[i+1])
  return Number(ans.join(''))
}