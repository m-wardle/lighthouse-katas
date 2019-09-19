const generateBoard = function(whiteQueen, blackQueen) {
  const board = [
    [],
    [],
    [],
    [],
    [],
    [],
    [],
    [],
  ];

  for (y = 0; y < 8; y++) {
    for (x = 0; x < 8; x++) {
      if ((x === whiteQueen[1] && y === whiteQueen[0]) || (x === blackQueen[1] && y === blackQueen[0])){
        board[y].push(1);
      } else {
        board[y].push(0);
      }
    }
  }
  return board
}

const queenThreat = function(generatedBoard) {

  var queens = [];

  for (y = 0; y < 8; y++) {
    for (x = 0; x < 8; x++) {
      if (generatedBoard[y][x] === 1) {
       queens.push([y, x])
      }
    }
  };

  if (queens[0][0] === queens[1][0] || queens[0][1] === queens[1][1]) {
    return true;
  } else if (Math.abs(queens[0][0] - queens[0][1]) === (Math.abs(queens[1][0] - queens[1][1]))) {
    return true;
  } else {
    return false;
  }
}


