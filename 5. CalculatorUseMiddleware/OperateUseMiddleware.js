module.exports = async(context) => {

    if(isNaN(context.numberA) || isNaN(context.numberB)) {
        context.body = {
            result : 'NumberA or NumberB is the number type.'
        }
    } else if( ! context.cal.operators.hasOwnProperty(context.operator)) {
        context.body = {
            result : 'The calculation does not exist.'
        }
    } else {
        let result   = context.cal.checkAndOperate(context.operator, context.numberA, context.numberB);
        context.body = {
            result : result
        }
    }
}