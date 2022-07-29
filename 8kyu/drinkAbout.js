// Kids drink toddy.
// Teens drink coke.
// Young adults drink beer.
// Adults drink whisky.
// Make a function that receive age, and return what they drink.



function peopleWithAgeDrink(old) {
  if( old < 14){
    return "drink toddy"
  }else if( old < 18){
    return "drink coke"
  }else if( old < 21){
    return "drink beer"
  }else {
    return "drink whisky"
  }
}