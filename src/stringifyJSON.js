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
  if (typeof obj === 'string') {
    // wrap '"' around strings
    return '"' + obj + '"';

  // handle numbers (including infinity, negative numbers)
  } else if (typeof obj === 'number') {
    // infinity is undefined
    if (obj === Infinity) {
      return undefined;
    // absolute values of numbers handled differently???
    } else if (obj < 0) {
      // >= 0 numbers
      var abso = Math.abs(obj);
      return abso.toString();
    } else {
      return obj.toString();
    }


  // handle booleans
  } else if (typeof obj === 'boolean') {
    return obj.toString();

  // handle 'null'
  } else if (obj === null) {
    return 'null';
  // handle 'undefined' and functions (think these are just empty objects?)
  } else if (typeof obj === 'undefined' || typeof obj === 'function') {
    return '{}';

  // handle array collections before objects
  } else if (Array.isArray(obj)) {
    // length 0 (empty arrays)
    if (obj.length === 0) {
      return '[]';
    // length 1 (recursive call on value + syntax)
    } else if (obj.length === 1) {
      return '[' + stringifyJSON(obj[0]) + ']';
    // length >1 (recursive call on each item in array + syntax)
    } else if (obj.length > 1) {
      var objArr = '';
      // iterate through items in array
      for (var i = 0; i < obj.length; i++) {
        // if last item add result of recursive call on index value
        if (i === obj.length - 1) {
          objArr = objArr + stringifyJSON(obj[i]);
        // else add result plus ','
        } else if (i < obj.length - 1) {
          objArr = objArr + stringifyJSON(obj[i]) + ',';
        }
        // return objArr urrounded by stringified braces
      }
      return '[' + objArr + ']';
    }


  // handle objects
  } else {
    var results = [];
    // empty object ('{}')
    // object with >= 1 k/v pair (recursive call on interior keys and values + proper syntax)
    for (var key in obj) {
      if (typeof obj[key] !== 'function' && typeof obj[key] !== 'undefined') {
        results.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + results.join() + '}';

  //
  }
};
