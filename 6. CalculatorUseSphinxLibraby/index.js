const Koa               = require('koa');
const app               = new Koa();
const calculatorModules = require('./CalculatorModules');

app.use(calculatorModules.calculator);
app.use(calculatorModules.numberUseMiddleware);
app.use(calculatorModules.operateUseMiddleware);

app.listen(3000);