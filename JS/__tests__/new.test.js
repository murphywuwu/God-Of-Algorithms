import New from '../new'

describe('new', function() {
  test('normal', function() {
    function Cat(sound) {
      this.sound = sound
    }

    const obj = New(Cat, 'miao');

    expect(obj).toEqual({
      sound: 'miao'
    });
    expect(obj.__proto__).toBe(Cat.prototype);
  });

  test('Constructor return value type', function() {
    function Cat(sound) {
      this.sound = sound

      return 123;
    }

    const obj = New(Cat, 'miao');
    expect(obj).toEqual({
      sound: 'miao'
    });
    expect(obj.__proto__).toBe(Cat.prototype);
  });

  test('Constructor return reference type', function() {
    function Cat(sound) {
      this.sound = sound

      return { color: 'white' };
    }

    const obj = New(Cat, 'miao');
    expect(obj).toEqual({
      color: 'white'
    });
    expect(obj.__proto__).toEqual(Object.prototype);
  });
})