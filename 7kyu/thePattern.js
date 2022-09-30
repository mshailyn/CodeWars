// You have to write a function pattern which returns the following Pattern(See Pattern & Examples) upto n number of rows.

// Note:Returning the pattern is not the same as Printing the pattern.


function pattern(n){
 let output="";
 let arr = []
 for(let i = 1; i <= n; i++){
   let val = i.toString()
  for(let b = 1; b < i; b++){
    val = val + i.toString()
  }
   arr.push(val)
 }
 return arr.join('\n');
}