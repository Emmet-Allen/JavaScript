function factorialize(num) {

// While Condition for when User Input is either "0" or "1"
  while (num === 0 || num === 1){
    return num = 1;
  }

/* For Loop that subtracts 1 from "i" when "i" is greater than or equal to 1
   when "i" is set to "num - 1" leading to (num(num-1(num-2(num-3 etc. until (num - i) = 1
    for (var i = num - 1; i >= 1; i--){
    
 // Assign looped "i" products to num   
    num *= i;
  }
//Output num
return num;
}

