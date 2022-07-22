// Given a string str, reverse it and omit all non-alphabetic characters.



function reverseLetter(str) {
  return str.replace(/[^a-zA-Z]/gm,"").split('').reverse().join('')
}