// Complete the solution so that the function will break up camel casing, using a space between words.





function solution(string) {
  let ans = []
  string.split('').map((a) => { a === a.toUpperCase() ? ans.push(' ',a) : ans.push(a)})
  return ans.join('')
}