function maxProfit(values) {
  if (values.length == 0) {
    return -1
  }

  let min = values[0];
  let profit = 0;
  values.forEach(function(value, index) {
    min = Math.min(min, value);
    profit = Math.max(profit, value-min);
  })
  return profit;
}

module.exports = maxProfit;
