import apply from '../apply'

describe('apply', function() {
  test('normal', function() {
    function Cat(name) {
      this.name = name;
    }


    const cat = {
      color: 'white'
    }

    Cat.myApply(cat, ['cheese']);
    
    expect(cat).toEqual({
      color: 'white',
      name: 'cheese'
    })
  });

  test('number', function() {
    function Fn() {
      return this;
    }

    const result = Fn.myApply(1);
    
    expect(result).toEqual(new Number(1));
  });
  
  test('symbol', function() {
    function Fn() {
      return this;
    }

    const result = Fn.myApply(Symbol());
    
    expect(result).toEqual(Object(Symbol()));
  });
})