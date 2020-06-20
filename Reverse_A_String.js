function reverseAString(str){

/*Using Methods 
str.split turns str into an array ["h", "e", "l", "l", "o"]
 .reverse "reverses" str.split array ["o", "l", "l", "e", "h"]
 .join "joins" str.split.reverse and wraps it with quotations "olleh"
*/

 let reverse = str.split("").reverse().join("");
  return reverse;
}


/*Using For Loop
reversed assign to quotes to create a string
iterate "i" through the "str.length" - 1 on the last character of the "str"
then concot the "str" to the "ith character" to "reveresed" 

  let reversed = "";
  for (var i = 0; i < str.length - 1; i >= 0; i--){
    reversed += str[i];
  }
 return reversed;
}
