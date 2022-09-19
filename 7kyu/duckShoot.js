//DESCRIPTION:
// You've arrived at a carnival and head straight for the duck shooting tent. Why wouldn't you?

// You will be given a set amount of ammo, and an aim rating of between 1 and 0. No your aim is not always perfect - hey maybe someone fiddled with the sights on the gun...

// Anyway your task is to calculate how many successful shots you will be able to make given the available ammo and your aim score, then return a string representing the pool of ducks, with those ducks shot marked with 'X' and those that survived left unchanged. You will always shoot left to right.



function duckShoot(ammo, aim, ducks){
  let shots = Math.floor(ammo*aim)
  ducks = ducks.split('').map(a => {
    if( a === '2' && shots > 0){
      shots--
      return 'X'
    }else{
      return a
    }
    })
  return ducks.join('')
}