function confirmEnding(str, target) {

/*Create conditional if statement where if the length of the words within the string
are subtracted by the length of the target are strictly eqaul to the target*/
if (str.slice(str.length - target.length) === target){
  //Return true
  return true;
  } 
  //Create conditional else statement for all other possibilites 
    else{
    //Reutrn false
    return false;
  }

}
  

confirmEnding("Bastian", "n");
//Should output "True"
