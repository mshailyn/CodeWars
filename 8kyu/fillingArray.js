// We want an array, but not just any old array, an array with contents!

//Write a function that produces an array with the numbers 0 to N-1 in it.


function arr(N){
  let arr = []
  for (let i= 0; i < N; i++){
    arr.push(i)
  }
  return arr
}