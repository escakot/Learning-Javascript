var words = ["ground", "control", "to", "major", "tom"];

console.log(words.map(function(word) {
  return word.length;
}));

console.log(words.map(function(word) {
  return word.toUpperCase();
}));

console.log(words.map(function(word) {
  return word.split('').reverse().join('');
}));
