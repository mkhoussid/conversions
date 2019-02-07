charBank = {
  a: 4, // [a,A]
  e: 3, // [e,E]
  i: 1, // [i, I]
  o: 0, // [o, O]
  s: 5, // [s, S]
  t: 7, // [t, T]
  b: 5, // [b, D] <-- trick map parameter?
  d: 5 //  [b, D]
};

transform = string => {
  // convert all to lower case
  string = string.toLowerCase();
  // cycle through each character
  for (let i = 0; i < string.length; i++) {
    // if current character exists in character bank ...
    if (charBank[string[i]])
      // ... then replace it with the appropriate mapping
      string = string.replace(string[i], charBank[string[i]]);
  }
  // return SAME string, but converted
  return string;
};

alert(transform('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'));
console.log(transform('THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG'));
