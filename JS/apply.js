Function.prototype.myApply = function(context, args) { 
  const map = {
    number: function (context) {
      return new Number(context);
    },
    string: function (context) {
      return new String(context);
    },
    boolean: function (context) {
      return new Boolean(context);
    },
    undefined: global || window,
    null: global || window,
    // 增加一种类型，symbol类型
    symbol: function (context) {
      return Object(context);
    },
  };
  
  context =
    map[context] ||
    (map[typeof context] && map[typeof context](context)) ||
    context;

  const fn = this;

  context.fn = fn;

  args = args || [];
  const val = context.fn(...args);

  delete context.fn;

  return val;
}
