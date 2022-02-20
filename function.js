// get 3 btns
const depoBtn = document.getElementById("deposit-btn");
const btcBtn = document.getElementById("buy-bitcoin-btn");
const ethBtn = document.getElementById("buy-eth-btn");

// get 3 available total
const balanceTotal = document.getElementById("balance-total");
const bitcoinTotal = document.getElementById("bitcoin-total");
const ethTotal = document.getElementById("eth-total");

// get value from input box
function getInputValue(inputId) {
  const inputValue = document.getElementById(inputId);

  const newInputValue = parseFloat(inputValue.value);
  if (isNaN(newInputValue) || newInputValue < 0) {
    inputValue.value = "";
    return alert("Please input valid value");
  }
  inputValue.value = "";
  return newInputValue;
}
// turn previous value into number 
function getPreviousValue(previousTotalText){
    let previousTotal = parseFloat(previousTotalText.innerText);
    return previousTotal
}
// update balance when clicked on deposit btn
depoBtn.addEventListener("click", function (event) {
  // form er vetore thaka btn er refresh problem solve
  event.preventDefault();

  // normal way to show input value in available
  /* const depoInput = document.getElementById('depo-input');
    const newBalanceInput =parseFloat(depoInput.value);
    const previousBalanceTotal = parseFloat(balanceTotal.innerText)
    // error handling normal 
    if(isNaN(newBalanceInput)||newBalanceInput<0){
        return alert('Please input valid value')
    } 
    // clear value after clicked 
depoInput.value = '';*/

//   const previousBalanceTotal = parseFloat(balanceTotal.innerText);
  const newBalanceInput = getInputValue("depo-input");
  // string or - num dile alert dekhanor por balance nan hoye jaoar problem solution
  if (newBalanceInput > 0) {
    balanceTotal.innerText = newBalanceInput + getPreviousValue(balanceTotal);
  }
});

// buy btn click after
btcBtn.addEventListener('click',function(){
    updatePortfolio('buy-bitcoin-input');
})
ethBtn.addEventListener('click',function(){
    updatePortfolio('buy-eth-input');
})
// update portfolio
function updatePortfolio(inputId) {
  const availableBalance = parseFloat(balanceTotal.innerText);
  let previousCoinAmount = parseFloat(ethTotal.innerText);
  let inputCoinAmount = getInputValue(inputId);
  if (inputCoinAmount > 0) {
    let totalExpense;
    if (inputId == "buy-bitcoin-input") {
      totalExpense = 10 * inputCoinAmount;
      if (totalExpense > availableBalance) {
        return alert("not enough balance");
      }
      bitcoinTotal.innerText = inputCoinAmount + getPreviousValue(bitcoinTotal);

    } 
    else if (inputId == "buy-eth-input") {
      totalExpense = 5 * inputCoinAmount;
      if (totalExpense > availableBalance) {
        return alert("not enough balance");
      }
    
      ethTotal.innerText =inputCoinAmount + getPreviousValue(ethTotal) ;
    }
    balanceTotal.innerText = availableBalance - totalExpense;
  }
}


