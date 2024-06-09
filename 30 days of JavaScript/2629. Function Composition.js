var double = function (x) {
  return x * 2;
};
var increment = function (x) {
  return x + 1;
};
var power = function (x) {
  return x * x;
};

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function (functions) {
  return function (x) {
    var value = x;
    for (let i = functions.length - 1; i >= 0; i--) {
      value = functions[i](value);
    }
    return value;
  };
};

function main() {
  var x = 4;

  var functionsArray = [increment, power, double];

  var composedFunction = compose(functionsArray);

  var result = composedFunction(x);
  console.log(result);
}

main();
