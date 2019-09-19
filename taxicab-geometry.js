const blocksAway = function(directions) {
  // Put your solution here

  const result = {}

  // Trackers to keep track of which way the cab is facing, and the cab's coordinates.

  var compass = 0; // 0 = North, 1 = East, 2 = South, 3 = West
  var cab = [0, 0];

  // Function to adjust compass tracker based on direction

  const direction = turn => {
    if (turn === "right" && compass < 3) {
      compass++;
    } else if (turn === "right") {
      compass = 0;
    } else if (turn === "left" && compass > 0) {
      compass--;
    } else if (turn === "left") {
      compass = 3;
    }
  }

  //Function to drive cab/update coordinates based on direction and distance.

  const drive = distance => {
    switch(compass) {
      case 0 :
        cab[1] += distance
        break;
      case 1:
        cab[0] += distance;
        break;
      case 2:
        cab[1] -= distance;
        break;
      case 3:
        cab[0] -= distance;
        break;
    }
  }

  // Since starting direction is not really defined, it must be set based on what the first direction *isn't*.

  if (directions[0] === "right") {
    compass =  0;
  } else {
    compass = 1;
  }

  // Loop through directions and apply functions

  directions.forEach(function(index) {
    if (typeof index === "string") {
      direction(index);
    } else {
      drive(index);
    }
  })

  // Assign coordinates to result object
 result.east = cab[0];
 result.north = cab[1];

 return result;

};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));