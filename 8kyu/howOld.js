//Philip's just turned four and he wants to know how old he will be in various years in the future such as 2090 or 3044. His parents can't keep up calculating this so they've begged you to help them out by writing a programme that can answer Philip's endless questions.

//Your task is to write a function that takes two parameters: the year of birth and the year to count years in relation to. As Philip is getting more curious every day he may soon want to know how many years it was until he would be born, so your function needs to work with both dates in the future and in the past.



function  calculateAge(age1,age2) {
 if(age1 > age2 && age1 - age2 !== 1){
   return `You will be born in ${age1 - age2} years.`
  }else if(age1 < age2 && age2 - age1 !== 1){
    return `You are ${age2-age1} years old.`
  }else if(age1 > age2 && age1 - age2 === 1){
    return "You will be born in 1 year."
  }else if(age1 < age2 && age2 - age1 === 1){
    return "You are 1 year old."
  }else{
    return "You were born this very year!"
  }
}