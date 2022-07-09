//Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.



function persistence(num) {
  let times = 0
  let number = num
   if(num < 10){
     return 0
   }else{
     do{
       number = number.toString().split('').reduce((a,c)=> a *c, 1)
       times++  
     } while( number >= 10 )
    return times
   } 
}