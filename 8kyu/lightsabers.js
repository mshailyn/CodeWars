// Inspired by the development team at Vooza, write the function that accepts the name of a programmer, and returns the number of lightsabers owned by that person.

// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

//8kyu - lightsabers.js

function howManyLightsabersDoYouOwn(name) {
  return name === 'Zach' ? 18 : 0
}