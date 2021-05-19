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
  //iterate through to find the lowest values for bottomLeft and highest values for topRight
  let lowest = state[0];
  let highest = state[0];
  state.forEach(cell => {
    if (cell[0] < lowest[0] && cell[1] <= lowest[1]) {
      //found new bottom left cell
      lowest = cell;
    }
    if (cell[0] > highest[0] && cell[1] >= highest[1]) {
      //found new top right cell
      highest = cell;
    }
  });

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