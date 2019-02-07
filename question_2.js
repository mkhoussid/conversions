uniqueCharactersCounter = string => {
  // initialize empty string to return
  let result = '';
  // by default, there will be at least one instance of each character
  let counter = 1;
  // cycle through the input ...
  for (let i = 0; i < string.length; i++) {
    // if current character matches next character, increase counter
    if (string[i] === string[i + 1]) counter++;
    // otherwise append to string that will be returned
    else {
      result += string[i] + counter.toString();
      // and reset counter
      counter = 1;
    }
  }
  console.log(result);
  alert(result);
};

// call function
uniqueCharactersCounter('hhhhhqqlllllllhhhppp');
