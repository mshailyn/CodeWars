//Given a sequence of numbers, find the largest pair sum in the sequence.



function largestPairSum (numbers) {
  let sortNums = numbers.sort((a,b) => b-a)
  return sortNums[0] + sortNums[1]
}