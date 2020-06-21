function repeatStringNumTimes(str, num) {
 
 // Create a variable to return new string
 var newStr = "";

    // Create conditional if statement where if the number input is less than or eqaul to 0
    if(num <= 0){
      // Returns an Empty String
      return "";
     }
 
      // Create an else if statment where if the number input is greater than 0
      else if(num > 0){
 
        // Use a for loop to loop i through the number input
        for(let i = 0; i < num; i++){
   
          // Append the str input to the newStr variable during each loop
          newStr += str;
          }
 
        } 
 
// Return newStr variable 
return newStr; 
}

repeatStringNumTimes("abc", 3);
//Should output abcabcabc
