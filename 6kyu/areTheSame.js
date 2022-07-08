// Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.


//6kyu - areTheSame.js




function comp(array1, array2){
  if(array1 === null || array1 === [] || array2 === null || array2 === []){
    return false
  }else{
    array2.forEach((a,i,arr)=> arr[i] = Math.sqrt(a))
    return array1.sort().join(",") === array2.sort().join(",")
  }
}