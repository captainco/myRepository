const Addition       = require('./Operator/Addition');
const Substration    = require('./Operator/Subtraction');
const Multiplication = require('./Operator/Multiplication');
const Division       = require('./Operator/Division');
const assert         = require('mocha').assert;
const chai           = require('chai');

describe('Test calculator', () => {
    let addition       = new Addition();
    let substration    = new Substration();
    let multiplication = new Multiplication();
    let division       = new Division();

    it('Test addition', () => {
        chai.assert.equal(addition.operate(1, 2), 3);
    });

    it('Test substration', () => {
        chai.assert.equal(substration.operate(1, 2), -1);
    });

    it('Test multiplication', () => {
        chai.assert.equal(multiplication.operate(1, 2), 2);
    });

    it('Test division', () => {
        chai.assert.equal(division.operate(4, 2), 2);
    });
    
});
