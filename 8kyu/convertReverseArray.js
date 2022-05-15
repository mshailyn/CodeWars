// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.


function digitize(n) {
  let digits = Array.from(n.toString()).map(Number);
  return digits.reverse()
}
