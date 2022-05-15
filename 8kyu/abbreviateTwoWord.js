// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.


function abbrevName(name){
  let arr = name.split(' ')
  const initials = arr.map((name) => name[0]).join('.')
  return initials.toUpperCase()
}