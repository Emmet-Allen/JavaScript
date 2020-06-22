function bouncer(arr) {

//Create a new array to store values
var newArr = [];

  //Create a for loop that iterates through the array
  for(var i = 0; i < arr.length; i++){
  
  /*Create an if statement for each value of the array,
    when that value is "true" push the value into the new array */
    if (arr[i]) newArr.push(arr[i]);
  }
     //Return new array with pushed values 
     return newArr;
}

bouncer([7, "ate", "", false, 9]);
//Should return [7, ate, 9]
