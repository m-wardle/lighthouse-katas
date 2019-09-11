let repeatNumbers = function(data) {
  // Put your solution here
  
  var result = [];

  // Use .forEach() to iterate over outer array, then using a for loop repeat the first index of the inner array according to the second index.

  data.forEach(function(array) {
    for (var i = 0; i < array[1]; i++) {
      result.push(array[0]);
    }
  })

  // If there is more than one sub-array use variable spliceIndex to track where to add ", " based on the amount the previous number repeated.

  if (data.length > 1) {
    var spliceIndex = data[0][1];
    for (var x = 1; x < data.length; x++) {
      result.splice(spliceIndex, 0, ", ");
      spliceIndex += (data[x][1] + 1);
    }
  }

  result = result.join("")
  return result;
};

// Tests

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2], [23, 3]]));