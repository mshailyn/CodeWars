// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.



function isIsogram(str){
  str = str.toLowerCase()
  let newStr = str.split('').sort().filter((a,i,arr) => a !== arr[i+1]).join('')
  return newStr.length === str.length ? true : false
}