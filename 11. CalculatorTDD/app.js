const Calculator     = require('./calculator');
const Addition       = require('./Operator/Addition');
const Subtraction    = require('./Operator/Subtraction');
const Multiplication = require('./Operator/Multiplication');
const Division       = require('./Operator/Division');
const chai           = require('chai');
const sinon          = require('sinon');


describe('Test calculator with addition', () => {
    const calculator = new Calculator();
    const fakeOps    = {
        operate(number1, number2) {
            return sinon.fake.returns(2019);
        }
    }
    calculator.register('fake', fakeOps);

    it('should return result from operator', () => {
        const result = calculator.calculate('fake', 1, 2);
        sinon.assert.equals(calculator.calculate('fake', 1 , 2), 2019);
        sinon.assert.calledOnce(fakeOps.operate(1, 2));
        sinon.assert(fakeOps.operate().calledWith(1, 2));
    });
});
