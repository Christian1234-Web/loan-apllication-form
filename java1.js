let current_balance = document.getElementById('current_balance'),
    loan_amount = document.getElementById('loan_amount'),
    creditHistory = document.getElementById('creditHistory'),
    creditDat = document.getElementById('creditDate'),
    depositHist = document.getElementById('depositHistory'),
    depositDat = document.getElementById('depositDate'),
    collectionHist = document.getElementById('collectionHistory'),
    collectionDat = document.getElementById('collectionDate'),
    repaymentPer = document.getElementById('repaymentPeriod'),
    operatedAccount = document.getElementById('operatedAccount'),
    amountAccountPoint = document.getElementById('amountAccountPoint'),
    depositPoint = document.getElementById('depositPoint'),
    loanCollectionPoint = document.getElementById('loanCollectionPoint'),
    loanRepaymentPoint = document.getElementById('loanRepaymentPoint'),
    accOperatedPoint = document.getElementById('accountOperatedPoint'),
    amountAccPoint = document.getElementById('amountAccountPoint'),
    annualSalary = document.getElementById('annualSalary'),
    pay_period = document.getElementById('pay_period'),
    Name = document.getElementById('Name'),
    status = document.getElementById('status'),
    point_display = document.getElementById('point_display'),
    annual_percentage = document.getElementById('annual_percentage'),
    point = 0,
    error1 = document.getElementById('error1');
    error2 = document.getElementById('error2');





let btn_submit = document.getElementById('btn');
let ageValue,
    result,
    result_1,
    result_2,
    result_3,
    result_4,
    result_5;


btn_submit.onclick = function() {
        validateForm();
    }
    //let total = point + result_1 + result_2 + result_3

function compute() {
    //console.log(loanPercentage)

    if (parseInt(current_balance.value) < parseInt(loan_amount.value)) {
        point -= 10
            //return;
    } else if (parseInt(current_balance.value) > parseInt(loan_amount.value)) {
        point += 10
    }

    
    let totalScore = point;
    let check = `Congratulations ${Name.value}   you are qualified.`

    let check_1 = 'Sorry ' + Name.value + ', ' + 'you are not qualified.'
    console.log(totalScore);
    if (totalScore >= 30) {
        status.innerHTML = check;
    } else {
        status.innerHTML = check_1;
    }
}
function loanValidity() {
    let loanPercentage = 0.45 * parseInt(annualSalary.value)
    annual_percentage.innerHTML = `45 percent of Your annual salary is ${loanPercentage}. `
}


//function validation
function validateForm() {
    if (current_balance.value == '' || current_balance.value == null) {
        console.log('invalid input');
    }
 if (loan_amount.value == '' || loan_amount.value == null || annualSalary.value == null) {
        // console.log('invalid input');
        error2.innerHTML = 'Annual salary required';
    }

    if (Name.value == '' || Name.value == null) {
        error1.innerHTML = 'Name Required';
        return false;
    } else {
        error1.innerHTML = '';
        loanValidity();
        pay_periods();
        accountType();
        compute();
    
            point_display.innerHTML = `Your total point is ${point}.`
    }
}


creditDat.onchange = function() {
    if (creditDat === '' || creditDat === null) {
        console.log('input invalid')
    } else {
        let loanDate = creditDat.value,
            shwMonth = new Date(loanDate).getMonth()
            // console.log(shwMonth);
        newerDate = shwMonth.getMonth;
        let result_1 = shwMonth;
        //creditHistory.value = shwMonth;
        creditHist = shwMonth - shwMonth
        document.getElementById('creditHistory').value = `${result_1+1} month ago`

        if (result_1 <= 5) {
            point += 10
                // } else if (result_1 > 5) {
                // point -= 0
        }



    }
};

depositDat.onchange = function() {
    if (depositDat === '' || depositDat === null) {
        console.log('input invalid')
    } else {
        let deposit = depositDate.value,
            shwMonth = new Date(deposit).getMonth()
            // console.log(shwMonth);
        newerDate = shwMonth.getMonth;
        let result_2 = shwMonth;

        document.getElementById('depositHistory').value = `${result_2+1} month ago`

        if (result_2 <= 0) {
            point += 5
        }

    }
}

collectionDat.onchange = function() {
    if (collectionDat === '' || collectionDat === null) {
        console.log('input invalid')
    } else {
        let collection = collectionDat.value,
            shwMonth = new Date(collection).getMonth()
            // console.log(shwMonth);
        newerDate = shwMonth.getMonth;
        let result_3 = shwMonth;

        document.getElementById('collectionHistory').value = `${result_3+1} month ago`

        if (result_3 >= 6) {
            point += 10
        }
    }
}

function accountType() {
    if (operatedAccount.value == "current") {
        point += 10
    } else if (operatedAccount.value == "savings") {
        point += 5
    }
}

function pay_periods() {
    if (pay_period.value > 6) {
        point -= 5
    } else if (pay_period.value <= 6 && pay_period.value > 0) {
        point += 5
    }
}
