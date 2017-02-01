var Calculator = require('../../public/js/calculator.js')
var assert = require('assert')

describe('calculator', function () {
  beforeEach(function () {
    calculator = new Calculator()
  });

  // write unit tests here in the form of "it should do something..."
  it('it has a sample test', function(){
    assert.equal(true, true)
  })

  it('should be able to add', function(){
    calculator.previousTotal = 0;
    calculator.add(1+4);
    assert.equal(5, calculator.runningTotal)
  })

  it('should be able to subtract', function(){
    calculator.previousTotal = 5;
    calculator.subtract(3)
    assert.equal(2, calculator.runningTotal)
  })

  it('should be able to multiply', function(){
    calculator.previousTotal = 2;
    calculator.multiply(2)
    assert.equal(4, calculator.runningTotal)
  })

  it('should be able to divide', function(){
    calculator.previousTotal = 4;
    calculator.divide(2)
    assert.equal(2, calculator.runningTotal)
  })

  it('should count numberClick', function(){
    calculator.previousTotal = 2;
    calculator.numberClick(7);
    assert.equal(7, calculator.runningTotal)
  })

  it('should count operatorClick', function(){
    calculator.previousTotal = 7;
    calculator.previousOperator = '+';
    calculator.runningTotal = 1;
    calculator.operatorClick("+");
    assert.equal(8, calculator.runningTotal)
  })

  it('should count clearClick', function(){
    calculator.previousOperator = '+';
    calculator.previousTotal = 100;
    calculator.runningTotal = 0;
    calculator.clearClick();
    assert.equal(null, calculator.previousOperator)
    assert.equal(null, calculator.previousTotal)
  })




});

