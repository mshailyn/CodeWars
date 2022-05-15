// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.



function getCount(str) {
  var vowelsCount = 0;
  let arr = str.split('')
  arr.forEach((a) => {
    if(a === 'a' || a === 'e' || a === 'i' || a === 'o' || a === 'u'){
      vowelsCount += 1
    }})
  return vowelsCount;
}