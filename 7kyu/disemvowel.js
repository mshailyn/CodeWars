// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.


//7kyu - disemvowel.js


function disemvowel(str) {
  str = str.replace(/[aeiou]/gi, '');
  return str
}