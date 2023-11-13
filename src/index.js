let amount = 0;

function checkAmountInWallet() {
  return amount;
}

function addMoneyOnWallet(input) {
  amount += input;
  return checkAmountInWallet();
}

function removeMoneyOnWallet(input) {
  if (amount >= input) {
    amount -= input;

    return checkAmountInWallet();
  } else {
    throw "saldo insuficiente";
  }
}

function setMoneyInWallet(input) {
  amount = input;
}

module.exports = {
  checkAmountInWallet,
  addMoneyOnWallet,
  removeMoneyOnWallet,
  setMoneyInWallet,
};
