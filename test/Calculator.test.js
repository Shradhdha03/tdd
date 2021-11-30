const assert = require('assert');
const Calculator = require('../Calculator');
describe('Calculator', function () {
  describe('Addition', function () {
    it('should return 8 when given 3 and 5 as input ', function () {
      const answer = Calculator.addition(3, 5)
      assert.equal(answer, 8);
    });

    it('should return 0 when given 5 and -5 as input ', function () {
      const answer = Calculator.addition(5, -5)
      assert.equal(answer, 0);
    });
  });
});