function largestOfFour(arr) {

// Create a new array to store largest values of each sub array
var newArray = [];

  // Use a for loop to iterate through the main array
  for (var i = 0; i < arr.length; i++){
  
    //Create a variable that wil store the largest number and assign it to the first index of the main array 
    var largestNum = arr[i][0];
    
      //Use a second for lopp to iterate through sub arrays
      for(var j = 1; j < arr[i].length; j++){
    
        /*Create conditional if statment where if the number in the sub array is greater than the first number
        of the first index of the sub array */
        if(arr[i][j] > largestNum){
  
          //Assign that number to the largest number variable
          largestNum = arr[i][j];
       }
     }
            //Assign the largest number of the "ith" index of the main array to the "ith" index of the new array  
            newArray[i] = largestNum; 
  }
  return newArray;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
//Should output [4, 27, 39, 1001]
