// I tried to think of a solution independently, and avoiding using things like array.prototype.sort() or math.max().
// This solution would likely be inefficient when used with large arrays.
// I found a solution online which found the two highest numbers using a for loop which would be more efficient, and it's what I would use going forward.

// My initial solution

let sumLargestNumbers = function(data) {
  
  // Array to hold all sums

  var sums = []; 

  // Nested for loops create an array of all sums

  for (var x = 0; x < data.length; x++) { 
    for (var y = 0; y < data.length; y++) {
      if(x === y) {

      } else {
        sums.push(data[x] + data[y]);
      }
    }
  }

  // Nested for loop running over sums array to find highest number (will have duplicates)
  
  for (x = 0; x < sums.length; x++) { 
    for (y = 0; y < sums.length;) {
      if (sums[x] > sums[y]) {
       sums.splice(y, 1); // Remove lower value from array
      } else {
        y++
     }
   }
  }
  return sums[0] // Since array contains duplicates, simply return the first array item
}

// Tests

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));

// Below is a version of the solution I researched, but didn't come up with independently

var sumTwoLargestNumbers = function(data) {
  
  // Variables to contain our sorted numbers, starting with the first two items in the array
  
  var largest = data[0];
  var secondLargest = data[1]

  // Sort the first two before looping through the array

  if (largest < secondLargest) {
    largest = data[1];
    secondLargest = data[0];
  }

  // Loop through the array, replacing our variables with higher values as they appear.
  // Starting with i = 2 as the first two indexes have been used already.

  for (var i = 2; i < data.length; i++) {
    if (data[i] > largest) {
      secondLargest = largest;
      largest = data[i];
    } else if (data[i] > secondLargest) {
      secondLargest = data[i];
    }
  }

  return largest + secondLargest;
}

// Tests

console.log(sumTwoLargestNumbers([1, 10]));
console.log(sumTwoLargestNumbers([1, 2, 3]));
console.log(sumTwoLargestNumbers([10, 4, 34, 6, 92, 2]));