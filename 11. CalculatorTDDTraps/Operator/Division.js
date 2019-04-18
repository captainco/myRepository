class Division {
    operate(number1, number2) {
        if (number2 == 0) {
            throw "Division by zero";
        } else 
            return number1 / number2;
    }
}

module.exports = Division;
