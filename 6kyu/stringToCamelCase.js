// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).





function toCamelCase(str){
  if(!str){
    return ''
  }else{
  let  newStr = str.replace(/_/g, "-")
  newStr = newStr.split('-')
  let ans = newStr.map( a => a[0].toUpperCase()+a.slice(1,a.length)).join('')
  ans = ans.split('')
  ans.splice(0,1,str[0])
  return ans.join('')
  }
}