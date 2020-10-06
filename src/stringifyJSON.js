// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // i: object that requires conversion to string in way that mimics JSON.stringify()
  // o: stringified version of that object
  // ec: primitive values: all data types handled by JSON.stringify (string, numbers, boolean, )
  // ec2: collections: arr & obj recursive calls to create stringified collections of interior values (arrays & objects), must have proper syntax including brackets, commmas, etc.
  // ec3: unstringifiable: appropriate return for functions, other types not handled by built-in function (null, undefined)
  // ecSummary: check out how JSON.stringify handles edge cases on MDN
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

  // series of conditionals to determine input type and response

  // check each primitive type as you code it using developer console to ensure proper handling of all cases
  // handle collections after: each value inside likely either a primitive type or edge case of unstringifiable value

  // handle strings
  // add '"' to strings

  // handle numbers (including infinity, negative numbers)
  // infinity is undefined
  // absolute values of numbers handled differently???
  // >= 0 numbers

  // handle booleans

  // handle 'null'

  // handle 'undefined' and functions (think these are just empty objects?)

  // handle array collections before objects
  // length 0 (empty arrays)
  // length 1 (recursive call on value + syntax)
  // length >1 (recursive call on each item in array + syntax)


  // handle objects
  // empty object ('{}')
  // object with >= 1 k/v pair (recursive call on interior keys and values + proper syntax)

  //
};
