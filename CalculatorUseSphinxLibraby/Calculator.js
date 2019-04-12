const Addition       = require('./Operators/Addition');
const Subtraction    = require('./Operators/Subtraction');
const Multiplication = require('./Operators/Multiplication');
const Division       = require('./Operators/Division');

class Calculator {
    constructor() {
       this.operators = {
           add : new Addition(),
           sub : new Subtraction(),
           mul : new Multiplication(),
           div : new Division()
       }
    }

    checkAndOperate(operator, numberA, numberB) {
        if( ! this.operators.hasOwnProperty(operator)) {
            throw "This operator is not exist";
        } else {
            return this.operators[operator].operate(numberA, numberB);
        }
    }
}

module.exports = Calculator;
