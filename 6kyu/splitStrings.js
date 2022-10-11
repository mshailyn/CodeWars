// Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').



function solution(str){
  str = str.length % 2 === 0 ?str : str+'_'
  let ans = str.split('').map((a,i) => i % 2 === 0 && i !== str.length-1 ? a : `${a} `).join('')
  return ans.split(' ').filter(a => a !== '')
}