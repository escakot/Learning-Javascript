let assert = require("chai").assert;
let maxProfit = require("../max-profit.js");

describe("Max Profit", function() {
  it("should be 16 Max Profit", function() {
    var values = [45, 24, 35, 31, 40, 38, 11];
    var result = maxProfit(values);
    assert.equal(result, 16);
  });
  it("should be 5 Max Profit", function() {
    var values = [1, 2, 3, 4, 5, 6];
    var result = maxProfit(values);
    assert.equal(result, 5);
  });
  it("should be no profit", function() {
    var values = [];
    var result = maxProfit(values);
    assert.equal(result, -1);
  });
});
