const assert = require("assert");
const { it, describe } = require("mocha");
const calculateNumber = require("./1-calcul");

describe('calculateNumber', () => {
    it('should perform addition when type is SUM', () => {
        assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });

    it('should perform subtraction when type is SUBTRACT', () => {
        assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should perform division when type is DIVIDE', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" for division by zero', () => {
        assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });

    it('should throw an error for invalid type', () => {
        assert.throws(() => calculateNumber('INVALID', 1.4, 4.5), Error);
    });
});
