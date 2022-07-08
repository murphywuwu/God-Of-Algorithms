function New(Constructor, ...args) {
  const instance = {};

  const value = Constructor.call(instance, ...args);
  if (value && typeof value == 'object') return value;
  Object.setPrototypeOf(instance, Constructor.prototype)

  return instance;
}

export default New