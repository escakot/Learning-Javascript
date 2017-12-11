function isPalindrome(s) {
  var stringRegular = s.split(" ").join("");
  var stringReverse = s.split(" ").join("").split("").reverse().join("");
  
  return stringRegular == stringReverse;
}

module.exports = isPalindrome;
