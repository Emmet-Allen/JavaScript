//set Module as a variable
let funModule = ( function() {
  //Have IIFE function return contents within module
  return {
  //Define Module 1
    isCuteMixin: function(obj) {
      obj.isCute = function() {
        return true;
      };
    },
    // Define Module 2
    singMixin: function(obj) {
      obj.sing = function() {
        console.log("Singing to an awesome tune");
      };
    }
  }
})(); // Double Parenthtese and Semicolon to Immedately Invoke
