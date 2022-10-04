//Pirates have notorious difficulty with enunciating. They tend to blur all the letters together and scream at people.

// At long last, we need a way to unscramble what these pirates are saying.

// Write a function that will accept a jumble of letters as well as a dictionary, and output a list of words that the pirate might have meant.

// Return matches in the same order as in the dictionary. Return an empty array if there are no matches.

// Good luck!



function grabscrab(anagram, dictionary) {
  let result = []
  let ana = anagram.split('').sort()
  dictionary.forEach(a => a.split('').sort().join('') == ana.join('') ? result.push(a) : a)    
  return result
}