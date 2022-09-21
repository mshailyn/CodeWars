//Given two integers a and b, which can be positive or negative, find the sum of all the integers between and including them and return it. If the two numbers are equal return a or b.

//Note: a and b are not ordered!



function getSum( a,b ){
  let start
  let end
  if( a > b){
    start = b
    end = a
  }else{
    start = a
    end = b
  }
  let newArr = []
  for(let i = start; i <= end ; i++){
    newArr.push(i)
  }
  
  return newArr.reduce((a,c)=> a + c)
}