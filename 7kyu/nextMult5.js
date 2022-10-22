//Given an integer as input, can you round it to the next (meaning, "greater than or equal") multiple of 5?



function roundToNext5(n){
  let test = n
    while( test % 5 !== 0){
      test++
    }
  return test
}