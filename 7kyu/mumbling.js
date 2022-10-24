//his time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"




function accum(s) {
   let ans = s.split('').map((a,i) => {
   let text = ''
     for(let j = 0; j <= i; j++){
       text = text + a
     }
     return text[0].toUpperCase()+text.slice(1).toLowerCase()
   })
  return ans.join('-')
}