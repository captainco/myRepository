module.exports = async(context, next) => {
    const operator   = context.query.operator;
    const numberA    = context.query.numberA;
    const numberB    = context.query.numberB;

    if(operator, numberA, numberB) {
        context.operator   = operator;
        context.numberA    = numberA;
        context.numberB    = numberB;
        return await next();
    }
    context.body     = {
        result : 'Missing or redundant elements.'
    }    
}