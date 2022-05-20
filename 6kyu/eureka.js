// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// sumDigPow(90, 100) == []
// Enjoy it!!



function sumDigPow(a, b) {
  let arr = []
  for(let i = a; i <= b ; i++){
    if(i.toString().length === 1){
      arr.push(i)
    }else if(i.toString().length === 2 && i === ( Math.pow(Math.floor(i/10), 1) + Math.pow((i % 10 ), 2) )){
      arr.push(i)
    }else if(i.toString().length === 3 && i === ( Math.pow(Math.floor(i/100), 1) + Math.pow(Math.floor((i%100)/10), 2) + Math.pow((i % 10), 3) )){
      arr.push(i)      
    }else if(i.toString().length === 4 && i === ( Math.pow(Math.floor(i/1000), 1) + Math.pow(Math.floor((i%1000)/100), 2) + Math.pow(Math.floor((i%100)/10), 3) + Math.pow((i % 10), 4) )){
      arr.push(i)
    }else if(i.toString().length === 7 && i === ( Math.pow(Math.floor(i/1000000), 1) + Math.pow(Math.floor((i%1000000)/100000), 2) + Math.pow(Math.floor((i%100000)/10000), 3) + Math.pow(Math.floor((i%10000)/1000), 4) + Math.pow(Math.floor((i%1000)/100), 5) + Math.pow(Math.floor((i%100)/10), 6) + Math.pow((i % 10), 7) )){
      arr.push(i)
    }
  }
  return arr
}