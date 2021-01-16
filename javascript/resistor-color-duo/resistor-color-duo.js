//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (searchColor) => {
  var colorNumber = [];

   colorNumber.push(COLORS.indexOf(searchColor[0]));
   colorNumber.push(COLORS.indexOf(searchColor[1]));
  
return parseInt(colorNumber.join("")) ;

};

export const COLORS = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];

