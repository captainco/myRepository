class Division {
    operate(numberA, numberB) {
        if (numberB == 0) {
            throw "Division by zero";
        } else {
            return parseInt(numberA) / parseInt(numberB);
        }
    }
}

module.exports = Division;
