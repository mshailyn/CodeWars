// Write a function named sumDigits which takes a number as input and returns the sum of the absolute value of each of the number's decimal digits.





function sumDigits(number) {
  return Array.from(String(number), Number).filter(Boolean).reduce((a,c) => a + c, Number(0))
}