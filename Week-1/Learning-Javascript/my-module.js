module.exports = {
  ability: "Add and Multiply",
  abilities: function() {
    console.log("I am able to: " + this.ability);
  },
  add: function(x,y) {
    return x + y;
  },
  multiply: function(x,y) {
    return x * y;
  }
}
