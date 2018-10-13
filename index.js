var prompt = require("prompt");

var tictactoetiles = {
  1: "1",
  2: "2",
  3: "3",
  4: "4",
  5: "5",
  6: "6",
  7: "7",
  8: "8",
  9: "9"
};

var tictactoeboard = () => {
  return (
    "\n" +
    tictactoetiles[1] +
    " | " +
    tictactoetiles[2] +
    " | " +
    tictactoetiles[3] +
    "\n" +
    "----------\n" +
    tictactoetiles[4] +
    " | " +
    tictactoetiles[5] +
    " | " +
    tictactoetiles[6] +
    "\n" +
    "----------\n" +
    tictactoetiles[7] +
    " | " +
    tictactoetiles[8] +
    " | " +
    tictactoetiles[9] +
    "\n"
  );
};
const winningTiles = tictactoetiles => {
  //horizontal
  //1,2,3
  if (
    tictactoetiles[1] === "O" &&
    tictactoetiles[2] === "O" &&
    tictactoetiles[3] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[1] === "X" &&
    tictactoetiles[2] === "X" &&
    tictactoetiles[3] === "X"
  ) {
    return "X";
  }
  //4,5,6
  if (
    tictactoetiles[4] === "O" &&
    tictactoetiles[5] === "O" &&
    tictactoetiles[6] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[4] === "X" &&
    tictactoetiles[5] === "X" &&
    tictactoetiles[6] === "X"
  ) {
    return "X";
  }
  //7,8,9
  if (
    tictactoetiles[7] === "O" &&
    tictactoetiles[8] === "O" &&
    tictactoetiles[9] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[7] === "X" &&
    tictactoetiles[8] === "X" &&
    tictactoetiles[9] === "X"
  ) {
    return "X";
  }
  //diagonal
  //1,5,9
  if (
    tictactoetiles[1] === "O" &&
    tictactoetiles[5] === "O" &&
    tictactoetiles[9] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[1] === "X" &&
    tictactoetiles[5] === "X" &&
    tictactoetiles[9] === "X"
  ) {
    return "X";
  }
  //3,5,7
  if (
    tictactoetiles[3] === "O" &&
    tictactoetiles[5] === "O" &&
    tictactoetiles[7] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[3] === "X" &&
    tictactoetiles[5] === "X" &&
    tictactoetiles[7] === "X"
  ) {
    return "X";
  }

  //vertical
  //1,4,7
  if (
    tictactoetiles[1] === "O" &&
    tictactoetiles[4] === "O" &&
    tictactoetiles[7] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[1] === "X" &&
    tictactoetiles[4] === "X" &&
    tictactoetiles[7] === "X"
  ) {
    return "X";
  }
  //2,5,8
  if (
    tictactoetiles[2] === "O" &&
    tictactoetiles[5] === "O" &&
    tictactoetiles[8] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[2] === "X" &&
    tictactoetiles[5] === "X" &&
    tictactoetiles[8] === "X"
  ) {
    return "X";
  }
  //3,6,9
  if (
    tictactoetiles[3] === "O" &&
    tictactoetiles[6] === "O" &&
    tictactoetiles[9] === "O"
  ) {
    return "O";
  }
  if (
    tictactoetiles[3] === "X" &&
    tictactoetiles[6] === "X" &&
    tictactoetiles[9] === "X"
  ) {
    return "X";
  }
};

var schema = {
  properties: {
    tile: {
      description: "Enter a tile number between 1-9: ",
      type: "integer",
      required: true
    }
  }
};

var count = 1;
function playTurn(player) {
  console.log(tictactoeboard());
  prompt.start();
  var winner = winningTiles(tictactoetiles);

  prompt.get(schema, function(err, result) {
    tictactoetiles[result.tile] = player;

    if (player === "X") {
      count++;
      playTurn("O");
    }
    if (player === "O") {
      count++;
      playTurn("X");
    }
    // var winner = winningTiles(tictactoetiles);

    // if (winner === "It is a tie") {
    //   console.log(winner);
    // } else {
    //   console.log(winner + "WON! Congratulations");
    // }
  });
}

playTurn("O");
