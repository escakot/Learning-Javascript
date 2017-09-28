function check(digit) {
  let digitArray = (""+digit).split("");
  let checkDigit = digitArray.pop();
  digitArray = digitArray.reverse().map(Number);

  let doubleDigits = digitArray.map(function(d, index) {
    let digit = index % 2 == 0 ? d * 2 : d;
    return digit
  })

  let minusDigits = doubleDigits.map(function(d) {
    let digit = d > 9 ? d - 9 : d;
    return digit
  })

  let sumDigits = minusDigits.reduce((a,b) => a + b, 0);
  let modDigit = sumDigits % 10;

  // console.log(digitArray);
  // console.log(doubleDigits);
  // console.log(minusDigits);
  // console.log(sumDigits);
  // console.log(checkDigit);
  // console.log(modDigit);

  return modDigit == checkDigit;
}

console.log(check(4556737586899855));
