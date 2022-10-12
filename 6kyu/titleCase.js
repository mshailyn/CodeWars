//A string is considered to be in title case if each word in the string is either (a) capitalised (that is, only the first letter of the word is in upper case) or (b) considered to be an exception and put entirely into lower case unless it is the first word, which is always capitalised.

// Write a function that will convert a string into title case, given an optional list of exceptions (minor words). The list of minor words will be given as a string with each word separated by a space. Your function should ignore the case of the minor words string -- it should behave in the same way even if the case of the minor word string is changed.


function titleCase(title, minorWords) {
  if(title === ''){
    return ''
  }else{
    !minorWords ? minorWords = '   ' : minorWords = minorWords.toLowerCase().split(' ')
    let ans = title.toLowerCase().split(' ')
     for (let i = 0; i < ans.length; i++) {
     if(!minorWords.includes(ans[i]) || i === 0){
       ans[i] = ans[i][0].toUpperCase() + ans[i].substr(1)}
     }
    return ans.join(' ')
  }
}