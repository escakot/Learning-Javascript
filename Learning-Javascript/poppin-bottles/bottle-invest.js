function bottleInvest(value) {
  let bottlesBought = value/2;
  let remainingBottles = 0;
  let remainingCaps = 0;
  let bottlesRedeemed = redeemBottles(bottlesBought);
  return bottlesRedeemed;
}

function redeemBottles(number, rate) {
  let totalBottles = 0;
  let balance = number;
  while(balance >= 4) {
    totalBottles += Math.floor(balance*0.75);
    balance = Math.floor(balance*0.75) + Math.floor(balance % (4/3));
    console.log(totalBottles, balance, Math.floor(balance % (4/3)));
  }
  if (balance >= 2) {
    totalBottles++;
  }
  remainingBottles = balance % 2;
  remainingCaps = balance % 4;
  return totalBottles;
}

module.exports = bottleInvest;
