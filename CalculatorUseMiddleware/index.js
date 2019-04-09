const Koa            = require('koa');
const Calculator     = require('./Calculator');
const app            = new Koa();
const cal            = new Calculator();

const numberUseMiddleware = async(context, next) => {
    const operator   = context.query.operator;
    const numberA    = context.query.numberA;
    const numberB    = context.query.numberB;

    if(operator, numberA, numberB) {
        return await next();
    }
    context.body     = {
        result : 'Missing or redundant elements.'
    }    
};

const operateUseMiddleware = async(context) => {
    const operator   = context.query.operator;
    const numberA    = context.query.numberA;
    const numberB    = context.query.numberB;

    if(typeof(numberA) != 'number' || typeof(numberB) != 'number') {
        context.body = {
            result : 'NumberA or NumberB is the number type.'
        }
    } else if( ! cal.operators.hasOwnProperty(operator)) {
        context.body = {
            result : 'The calculation does not exist.'
        }
    } else {
        let result   = parseInt(cal.checkAndOperate(operator, numberA, numberB));
        context.body = {
            result : result
        }
    }
}

app.use(numberUseMiddleware);
app.use(operateUseMiddleware);

app.listen(3000);