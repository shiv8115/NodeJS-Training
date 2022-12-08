let rs = require('readline-sync');
const getOperator = () => {
    operator = rs.question("What operation would you like to perform(+, -, *, /)? ");

    if (operator === '+' || operator === '-' || operator === '*' || operator === '/') {
        // Its okay
    } else {
        console.log("That is not a valid operation.");
        getOperator();
    }
}

// for input
const getNum = (type) => {
    let someNum = rs.question(`Please enter the ${type} number: `);
    if (!isNaN(someNum)) {
        return someNum;
    } else {
        console.log("Please enter a valid number.");
        return getNum(type);
    }
}

// for calculation
const calc = () => {
    if (operator === '+') {
        let sum = num1 + num2;
        return sum;
    } else if (operator === '-') {
        let diff = num1 - num2;
        return diff;
    } else if (operator === '*') {
        let product = num1 * num2;
        return product;
    } else if (operator = '/') {
        if (num2 === 0) {
            console.log("Cannot divide by zero.");
            getOperator();
        } else {
            let quotient = num1 / num2;
            return quotient.toFixed(2);
        }
    }
}
getOperator();
num1 = Number(getNum('first'));
num2 = Number(getNum('second'));
console.log(`${num1}${ operator}${num2} = ` + calc());