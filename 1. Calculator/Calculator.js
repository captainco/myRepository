class Operator {
    operate() {}
}

class Addition extends Operator {
    operate(numberA, numberB) {
        return numberA + numberB;
    }
}

class Subtraction extends Operator {
    operate(numberA, numberB) {
        return numberA - numberB;
    }
}

class Multiplication extends Operator {
    operate(numberA, numberB) {
        return numberA * numberB;
    }
}

class Division extends Operator {
    operate(numberA, numberB) {
        if (numberB == 0) {
            throw "Division by zero";
        } else 
            return numberA / numberB;
    }
}

class Calculator {
    constructor() {
        this.operators = {
            '+' : new Addition(),
            '-' : new Subtraction(),
            '*' : new Multiplication(),
            '/' : new Division()
        }
    }

    check(operator, numberA, numberB) {
        if( ! this.operators.hasOwnProperty(operator)) {
            throw "Error";
        } else { 
            return this.operators[operator].operate(numberA, numberB);
        }
    }
}
 
const calculator = new Calculator();
const result = calculator.check('*', 3, 2);
console.log(result);

try {
    const result = calculator.check('/', 3, 0);
}
catch(result) {
    console.log(result);
}
