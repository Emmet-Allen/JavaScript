function truncateString(str, num) {

//Create variables for appending the new string and seperating the words of the string into an array
var newStr = "";
var sliceStr = str.slice();

  //Use an if conditional so that if the inputed number is less than the string length
  if (num < str.length){
  
      //Initate a for loop for the given number 
      for(let i = 0; i < num; i++){
    
        // Append and Assign each character of the sliced string into the newStr variable 
        newStr += sliceStr[i];
      }
    // Return the newStr variable with "..." appened to it
        return newStr + "...";
    }
  
  // Use an else if conditional so that if the inputed number is greater than or equal to the str.length
  else if (num >= str.length) {
  //Return the inputed string
   return str; 
  }

}

truncateString("A-tisket a-tasket A green and yellow basket", 8);
//Should output "A-tisket..." 
