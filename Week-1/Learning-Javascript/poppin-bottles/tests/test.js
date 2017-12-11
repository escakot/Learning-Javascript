let assert = require("chai").assert;
let invest = require("../bottle-invest");

describe("How many bottles of pop if I have $?", function() {
  it("should 15 bottles", function(){
    assert.equal(invest(10),15);
  });
  it("should 35 bottles", function(){
    assert.equal(invest(20),35);
  });
  it("should 55 bottles", function(){
    assert.equal(invest(30),55);
  });
  it("should 75 bottles", function(){
    assert.equal(invest(40),75);
  });
});
