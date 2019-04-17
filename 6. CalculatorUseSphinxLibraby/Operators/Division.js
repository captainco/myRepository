const SphinxDivision = require('@sphinx-software/division-operator');
function createSphinxDivision() {
    let sphinxDiv = new SphinxDivision(false);
    sphinxDiv.setMessageWhenFailed("Deo duoc chia cho 0");
    return sphinxDiv;
}

class Division {
    constructor() {
        this.sphinxDiv = createSphinxDivision();
    }
    operate(numberA, numberB) {
        return this.sphinxDiv.runDivide(numberA, numberB);
    }
}

module.exports = Division;