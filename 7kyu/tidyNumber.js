// A Tidy number is a number whose digits are in non-decreasing order. Given a number, Find if it is Tidy or not .




function tidyNumber(n){
  let ans = true
 n.toString().split('').forEach((a,i,arr) => a > arr[i+1] ? ans=false : a)
  return ans
}