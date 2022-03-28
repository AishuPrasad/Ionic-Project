const reasonInput = document.querySelector('#input-reason');
const amountInput = document.querySelector('#input-amount');
const cancelBtn = document.querySelector('#btn-cancel');
const confirmBtn = document.querySelector('#btn-confirm');
const expensesList = document.querySelector('#expenses-list');
const totalExpOutput = document.querySelector('#total-expenses');

let totExp = 0;

const clear = () => {
    reasonInput.value = '';
    amountInput.value = '';
};

confirmBtn.addEventListener('click', () => {
    console.log('Button clicked');
    const enteredReason = reasonInput.value;
    const enteredAmt = amountInput.value;
    let alertCtrl = document.getElementById('#ionic-controler');

    if (enteredReason.trim().length <= 0 || enteredAmt <= 0 || enteredAmt.trim().length <= 0) {
        alertCtrl.create({
            message: 'Plz enter a valid input',
            header: 'Invalid Inputs',
            buttons: ['Okay'],
        }).then(alertElement => {
            alertElement.present();
        });
        return;
    }
    // console.log(enteredAmt, enteredReason);
    const newItem = document.createElement('ion-item');
    newItem.textContent = enteredReason + ':$' + enteredAmt;
    expensesList.appendChild(newItem);
    totExp += +enteredAmt;
    totalExpOutput.textContent = totExp;
    clear();
});

cancelBtn.addEventListener('click', clear);