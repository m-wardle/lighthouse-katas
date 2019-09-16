const organizeInstructors = function(instructors) {
  // Put your solution here

  var output = {};

  for (var i = 0; i < instructors.length; i++) {
    output[instructors[i].course] = []
  }

  for (i = 0; i < instructors.length; i++) {
    output[instructors[i].course].push(instructors[i].name)
  }

  return output
};

// Tests

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));