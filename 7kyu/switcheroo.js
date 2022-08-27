// Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.



function switcheroo(x){
  let arr = x.split('').map(a => {
    if (a === 'a'){
      return 'b'
    }else if( a === 'b'){
      return 'a'
    }else{
      return a
    }
  })
  return arr.join('')
}