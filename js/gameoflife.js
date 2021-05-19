function seed() {
  let arr = Array.prototype.slice.call(arguments);

}

function same([x, y], [j, k]) {
  x === j && y === k ? true : false;
}

// The game state to search for `cell` is passed as the `this` value of the function.
function contains(cell) {
  return this.includes(cell);
}

const printCell = (cell, state) => {
  if (state.contains.call(cell)) {
    return ('\u25A3');
  } else {
    return ('\u25A2');
  }
};

const corners = (state = []) => {

  let lowest_column, highest_column = state[0][0];
  let lowest_row, highest_row = state[0][1];

  state.forEach(cell => {
    if (cell[0] < lowest_column) {
      lowest_column = cell[0];
    }
    if (cell[0] > highest_column) {
      highest_column = cell[0];
    }
    if (cell[1] < lowest_row) {
      lowest_row = cell[1];
    }
    if (cell[1] > highest_row) {
      highest_row = cell[1];
    }
  });

  let highest = [highest_column, highest_row];
  let lowest = [lowest_column, lowest_row];

  let result = {
    topRight: highest,
    bottomLeft: lowest
  }

  return result;
};

const printCells = (state) => {
  console.log(this, state);

};

const getNeighborsOf = ([x, y]) => { };

const getLivingNeighbors = (cell, state) => { };

const willBeAlive = (cell, state) => { };

const calculateNext = (state) => { };

const iterate = (state, iterations) => { };

const main = (pattern, iterations) => { };

const startPatterns = {
  rpentomino: [
    [3, 2],
    [2, 3],
    [3, 3],
    [3, 4],
    [4, 4]
  ],
  glider: [
    [-2, -2],
    [-1, -2],
    [-2, -1],
    [-1, -1],
    [1, 1],
    [2, 1],
    [3, 1],
    [3, 2],
    [2, 3]
  ],
  square: [
    [1, 1],
    [2, 1],
    [1, 2],
    [2, 2]
  ]
};

const [pattern, iterations] = process.argv.slice(2);
const runAsScript = require.main === module;

if (runAsScript) {
  if (startPatterns[pattern] && !isNaN(parseInt(iterations))) {
    main(pattern, parseInt(iterations));
  } else {
    console.log("Usage: node js/gameoflife.js rpentomino 50");
  }
}

exports.seed = seed;
exports.same = same;
exports.contains = contains;
exports.getNeighborsOf = getNeighborsOf;
exports.getLivingNeighbors = getLivingNeighbors;
exports.willBeAlive = willBeAlive;
exports.corners = corners;
exports.calculateNext = calculateNext;
exports.printCell = printCell;
exports.printCells = printCells;
exports.startPatterns = startPatterns;
exports.iterate = iterate;
exports.main = main;