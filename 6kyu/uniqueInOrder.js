// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.



var uniqueInOrder=function(iterable){
 return typeof iterable === 'string' ? iterable.split('').filter((a,i) => iterable[i] !== iterable[i-1]) : iterable.filter((a,i) => iterable[i] !== iterable[i-1])
}