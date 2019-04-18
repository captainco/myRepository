const Addition       = require('./Operator/Addition');
const Substration    = require('./Operator/Subtraction');
const Multiplication = require('./Operator/Multiplication');
const Division       = require('./Operator/Division');
const assert         = require('mocha').assert;
const chai           = require('chai');

describe('Test calculator', () => {
    const add = new Addition();
    const sub = new Substration();
    const mul = new Multiplication();
    const div = new Division();

    it('Test addition', () => {
        let result = add.operate(1, 2);
        chai.assert.equal(result, 3);
    });

    it('Test substration', () => {
        let result = sub.operate(1, 2);
        chai.assert.equal(result, -1);
    });

    it('Test multiplication', () => {
        let result = mul.operate(1, 2);
        chai.assert.equal(result, 2);
    });

    it('Test division', () => {
        let result = div.operate(4, 2);
        chai.assert.equal(result, 2);
    });

});
