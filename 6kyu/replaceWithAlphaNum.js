//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.



function alphabetPosition(text) {
  text = text.toLowerCase().split(' ').join('').replace(/[^a-zA-Z]/g,"")
  let pairs = { a: '1',b: '2',c: '3',d: '4',e: '5',f: '6',g: '7',h: '8',i: '9',j: '10',k: '11',l: '12',m: '13',n: '14',o: '15',p: '16',q: '17',r: '18',s: '19',t: '20',u: '21',v: '22',w: '23',x: '24',y: '25',z: '26',}
  return text.split('').map((a) => { return pairs[a]}).join(' ');
}