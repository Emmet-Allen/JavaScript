function findLongestWordLength(str) {

// Turn "str" string input into an array of strings
  var arrayStr = str.split(" ");
// Set maximum (largest) number variable  
  var max = 0; 

//Use for loop such that iterates through i + 1 through the length of the "arrayStr" string array
  for(let i = 0; i < arrayStr.length; i++){
  
  // Set Parameters that if the value length of the "arrayStr" to the "i"th number is greater than max
    if (arrayStr[i].length > max){
    
   // Assign value of "arrayStr" to the "i"th to the "max" variable
      max = arrayStr[i].length;
    }
  }
  // Return max value
  return max;
}


