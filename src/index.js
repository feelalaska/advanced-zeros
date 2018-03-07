module.exports = function getZerosCount(number, base) {
  // your implementation
  var basics = [], 
  bTemp = base,
  basicsCount = []; 
  while (bTemp%2 == 0) { 
    basics.push(2); 
    bTemp /= 2; 
  } 
  for (var i = 3; i <= bTemp; i+=2) { 
    while (bTemp%i == 0) { 
    basics.push(i); 
    bTemp /= i; 
    } 
  } 

  basicsCount[0] = [basics[0], 1];
  var noRepeat = false;
  for (var i = 1; i < basics.length; i++) { 
    for (var j = 0; j < basicsCount.length; j++) {
      if (basics[i] == basicsCount[j][0]) {
        basicsCount[j][1]++;
        noRepeat = true;
      } else {
        noRepeat = false;
      }
    }
    if (!noRepeat) {
      basicsCount.push([basics[i], 1]);
    }
  } 

  var sum = 0,
      sumTemp = 0;
  for (var i = 0; i < basicsCount.length; i++) {
    for (var j=basicsCount[i][0]; j <= number; j*=basicsCount[i][0]) {
      sumTemp += Math.floor(number/j);
    }
    sumTemp = Math.floor(sumTemp / basicsCount[i][1]);
    if (sum == 0) {
      sum = sumTemp;
      sumTemp = 0;
    } else if (sumTemp < sum) {
      sum = sumTemp;
      sumTemp = 0;
    }
  }

  return sum;
}