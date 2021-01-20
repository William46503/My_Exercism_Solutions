//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (givenString) => {
 
  if(givenString !== ""){ //Check if there is a given value
    var dnaArray = givenString.split(''); //1: split the string into an array of characters
    for (let i = 0; i < dnaArray.length; i++) { //2: for each character in the array, use the switch statement to replace each item
      switch (dnaArray[i]) {
        case "G" : dnaArray.splice(i, 1, "C");
        break;
        case "C" : dnaArray.splice(i, 1, "G");
        break;
        case "T" : dnaArray.splice(i, 1, "A");
        break;
        case "A" : dnaArray.splice(i, 1, "U");
        break;
      }
    }
    
    var RNAString = dnaArray.join(""); //3: Assemble the array of character into a string
    return RNAString; 
  } else{
    return givenString;
  }
};

// * `G` -> `C`
// * `C` -> `G`
// * `T` -> `A`
// * `A` -> `U`