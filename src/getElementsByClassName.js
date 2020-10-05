// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className, targetElement) {
  // i: target class name
  // o: array of elements that class match
  // ec: empty body return empty array,

  // define result array
  var resultArray = []; //should be input instead?
  // if input element null or undefined current element is document.body
  var currentElement = targetElement || document.body;

  if (currentElement.classList.contains(className)) {
    // add element to array
    resultArray.push(currentElement);
  }

  for (var i = 0; i < currentElement.children.length; i++) {
    // base case is last element in last child return result array
    if (currentElement.children[i] === undefined) {
      return resultArray;
    } else {
      // recursive check on element if classlist includes target className
      /// push csv version of inner results to current resultArray
      resultArray.push(...getElementsByClassName(className, currentElement.children[i]));
    }
  }
  // return resultArray as is if no additional item to add
  return resultArray;

};
