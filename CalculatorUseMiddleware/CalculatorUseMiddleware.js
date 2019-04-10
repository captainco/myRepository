const Calculator = require('./Calculator');
const cal        = new Calculator();

module.exports = async(context, next) => {
    context.cal = cal;
    await next();
}