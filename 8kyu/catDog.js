//  have a cat and a dog. I got them at the same time as kitten/puppy. That was humanYears years ago. Return their respective ages now as [humanYears,catYears,dogYears]




var humanYearsCatYearsDogYears = function(humanYears) {
  let cat
  let dog
  if(humanYears === 1){
    cat = 15
    dog = 15
  }else if(humanYears === 2){
    cat = 24
    dog = 24
  }else{
    cat = (humanYears-2)*4 + 24
    dog = (humanYears-2)*5 + 24
  }
  let arr = []
  arr.push(humanYears)
  arr.push(cat)
  arr.push(dog)
  return arr;
}
