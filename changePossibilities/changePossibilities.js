function changePossibilities(amount, denominations) {
  let combinations = new Array(amount + 1).fill(0);
  let combinationPerCoin = {};

  combinations[0] = 1;

  for (let coin = 0; coin < denominations.length; coin++) {
    for (let amount = 1; amount < combinations.length; amount++) {
      let currentCoin = denominations[coin];
      if (amount >= currentCoin) {
        let previousComb = combinations[amount - currentCoin];
        combinations[amount] += previousComb;
      }
    }
    //  combinationPerCoin[coin + 1] = combinations.concat();
  }
  //  console.log(combinationPerCoin);
  // console.log(combinations)
  return combinations[amount];
}

changePossibilities(5, [1, 2, 3]);

module.exports = changePossibilities;

// 0, 1, 2, 3, 4, 5;
// [1,1,2,1,1]
/*  0 1 2 3 4 5
   1 1 1 1 1 1 1
   2 1 1 2 2 3 3
   3 1 1 2 3 4 5
 */
