//More generally: given two speeds v1 (A's speed, integer > 0) and v2 (B's speed, integer > 0) and a lead g (integer > 0) how long will it take B to catch A?

//The result will be an array [hour, min, sec] which is the time needed in hours, minutes and seconds (round down to the nearest second) or a string in some languages.



function race(v1, v2, g) {
  let ans = g/(v2-v1)
  let time = []
  time.push(Math.floor(ans))
  time.push(Math.floor(ans * 60 % 60))
  time.push(Math.floor((ans * 3600) % 60))
   return v1 > v2 ? null : time
}