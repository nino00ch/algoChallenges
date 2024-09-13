function getChange(totalAmount, denominations) {
  // Sort the denominations in descending order
  denominations.sort((a, b) => b - a);

  // Object to store the number of each bill/coin used
  let change = {};

  // Iterate through each denomination
  for (let i = 0; i < denominations.length; i++) {
    let denomination = denominations[i];

    // Calculate how many of the current denomination can fit into the totalAmount
    let count = Math.floor(totalAmount / denomination);

    if (count > 0) {
      // Store the count for this denomination
      change[denomination] = count;

      // Subtract the corresponding amount from totalAmount
      totalAmount -= count * denomination;
    }
  }

  if (totalAmount > 0) {
    return "Exact change cannot be made with the available denominations.";
  }

  return change;
}

let totalAmount = 47;
let denominations = [1, 5, 10, 20];

let result = getChange(totalAmount, denominations);
console.log(result);
