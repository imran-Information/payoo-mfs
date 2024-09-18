document.getElementById('add-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    // phone & pin Number access 
    const moneyInput = document.getElementById('money-amount-input').value;
    const pinNumber = document.getElementById('pin-number-input').value;

    if (pinNumber === '1234') {
        // main balance access
        let mainBalance = document.getElementById('main-balance').innerText;
        const mainBalanceNumber = parseInt(mainBalance);
        const moneyInputNumber = parseInt(moneyInput)

        const updateBalance = mainBalanceNumber + moneyInputNumber;
        mainBalance = document.getElementById('main-balance').innerText = updateBalance;

    } else {
        alert('Wrong Pin Number')
    }

});

document.getElementById('cash-out-money-btn').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutInput = document.getElementById('cash-out-amount-input').value;
    const cashOutInputNumber = parseInt(cashOutInput);

    const cashOutPinNumber = document.getElementById('cash-out-pin-number-input').value;

    if (cashOutPinNumber === '1234') {
        const mainBalance = document.getElementById('main-balance').innerText;
        const mainBalanceNumber = parseInt(mainBalance);

        const updateBalance = mainBalanceNumber - cashOutInputNumber;

        document.getElementById('main-balance').innerText = updateBalance;
    }
    else {
        alert('Wrong Pin number')
    }

})

