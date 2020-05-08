function rangeOfNumbers(startNum, endNum) {

  /* If startNum === endNum true, return [startNum] */
  return startNum === endNum
  ? [startNum]
  /* If false create an array with startNum and endNum - 1, then combine the arrays */ 
  : rangeOfNumbers(startNum, endNum - 1).concat(endNum);
};
