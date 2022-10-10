// Assume "#" is like a backspace in string. This means that string "a#bc#d" actually is "bd"

// Your task is to process a string with "#" symbols.



function cleanString(s) {
 let ans = s
 let regex = /[!"$-~]#/g
 for(let i = 0; i < s.length; i++){
   ans.includes('#') ? ans = ans.replace(regex , "") : ans
  }
  return ans.replace(/#/g , "")
}