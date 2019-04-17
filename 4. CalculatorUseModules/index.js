const Calculator = require('./CalculatorUseModules');

const cal = new Calculator();

try {
    console.log(cal.checkAndOperate(process.argv[2], process.argv[3], process.argv[4]));
} catch(error) {
    console.log(error);
}
