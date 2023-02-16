document.getElementById('btn-calculate').addEventListener('click',function(){
    const totalIncome = getInputField('income-field');
    const foodExpense = getInputField('food-field');
    const rentExpense = getInputField('rent-field');
    const clothsExpense = getInputField('cloths-field');

    if(isNaN(totalIncome,foodExpense,rentExpense,clothsExpense)){
        alert('Please Provide Number');
    }

    const totalExpense = foodExpense + rentExpense + clothsExpense;
    setInnerTextValue('expenses-id', totalExpense);

    const balanceTotal = totalIncome - totalExpense;
    setInnerTextValue('balance-id', balanceTotal);

   /*  emptyField('income-field');
    emptyField('food-field');
    emptyField('rent-field');
    emptyField('cloths-field'); */
});

document.getElementById('btn-save').addEventListener('click',function(){
    const totalIncome = getInputField('income-field');
    const savingInputAmount = getInputField('save-field');
    const savingBalance = totalIncome * savingInputAmount / 100;
    setInnerTextValue('save-id',savingBalance);

    const balanceTotal = getInnerText('balance-id');
    const savingTotal = getInnerText('save-id');
    const remainingTotal = balanceTotal - savingTotal;

    setInnerTextValue('remaining-id', remainingTotal);

    //console.log(remainingTotal);

  /*   emptyField('income-field');
    emptyField('save-field'); */
});

function getInputField(id){
    const inputField = document.getElementById(id).value;
    const inputFieldAmount = parseInt(inputField);
    return inputFieldAmount;
}

function getInnerText(id){
    const textField = document.getElementById(id).innerText;
    const textFieldValue = parseInt(textField);
    return textFieldValue;
}

function setInnerTextValue(id,value){
    const textField = document.getElementById(id);
    textField.innerText = value;
}

function emptyField(id){
    document.getElementById(id).value = '';
}

