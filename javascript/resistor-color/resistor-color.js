//
// This is only a SKELETON file for the 'Resistor Color' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const colorCode = (searchColor) => {
  
  return searchColor == "COLORS"|| searchColor == "Colors" ?  COLORS : COLORS.indexOf(searchColor);


};

export const COLORS = [ 'black', 'brown', 'red', 'orange', 'yellow', 'green', 'blue', 'violet', 'grey', 'white'];
