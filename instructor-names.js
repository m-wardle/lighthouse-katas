const instructorsWithLongestName = function(instructors) {
  // Put your solution here

  var longestNames = [instructors[0]];

    for (i = 1; i < instructors.length; i++) {
    if (longestNames[0].name.length < instructors[i].name.length) {
      longestNames = [];
      longestNames.push(instructors[i]);
    } else if (longestNames[0].name.length === instructors[i].name.length) {
      longestNames.push(instructors[i])
    }
  }

  return longestNames;
};

// Tests

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"},
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

const instructorWithLongestName = function(instructors) {
  // Put your solution here

  var longestName = instructors[0];

    for (i = 1; i < instructors.length; i++) {
    if (longestName.name.length < instructors[i].name.length) {
      longestName = instructors[i];
    } 
  }

  return longestName;
};