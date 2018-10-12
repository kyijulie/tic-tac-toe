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

var tictactoeboard =
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
  "\n";

const winningTiles = tictactoetiles => {
  //1,2,3
  //4,5,6
  //7,8,9
  //1,5,9
  //3,5,7
  //1,4,7
  //2,5,8
  //3,6,9
};

function playTurn(player) {}
