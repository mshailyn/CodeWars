//Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

//Division by zero should return NaN.



function remainder(n, m){
  if( n > m ){
    return n % m 
  }else{
    return m % n
  }
}