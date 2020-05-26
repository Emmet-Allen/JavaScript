let sampleWord = "astronaut";

/*Conditions of Regex in Order: 
1)Does Not Begin with Numbers
2)5 Characters Long
3)2 Consecutive Digits */

let pwRegex = /^(?=\D)(?=\w{5})(?=\w*\d{2})/; 
let result = pwRegex.test(sampleWord);
