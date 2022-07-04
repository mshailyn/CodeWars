// More generally given parameters:

// p0, percent, aug (inhabitants coming or leaving each year), p (population to surpass)

// the function nb_year should return n number of entire years needed to get a population greater or equal to p.

// aug is an integer, percent a positive or null floating number, p0 and p are positive integers (> 0)





function nbYear(p0, percent, aug, p) {
  for (i = 0; p0 < p; i++) {
    p0 += Math.floor(p0 * (percent / 100) + aug);
  }
  return i;
}