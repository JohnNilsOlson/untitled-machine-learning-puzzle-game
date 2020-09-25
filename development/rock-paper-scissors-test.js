const brain = require('brain.js');
const rules = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = rules.map(item => ({
  input: item.move,
  output: item.lose
}));

network.train(trainingData, {
  iterations: 2000
});

// 1:  Rock
// 2:  Paper
// 3:  Scissors

// Correctly identifies winning move.
const output1 = network.run(1);
const output2 = network.run(2);
const output3 = network.run(3);

console.log('Picks Correct Winning Move:')
console.log(`${output1} wins`);
console.log(`${output2} wins`);
console.log(`${output3} wins`);

// Random move.
const output4 = network.run();

console.log('Random Move:');
console.log(`${output4}`);

// Guesses based on pattern.
// -------------------------

// User pattern Rock, Rock, Rock
// Always guesses Paper
const output5 = network.run(1,1,1);

console.log('User Picked Rock Three Times:');
console.log(`${output5}`);

// User pattern Paper, Paper, Paper
// Always guesses Scissors
const output6 = network.run(2,2,2);

console.log('User Picked Paper Three Times:');
console.log(`${output6}`);

// User pattern Scissors, Scissors, Scissors
// Always guesses Rock
const output7 = network.run(3,3,3);

console.log('User Picked Scissors Three Times:');
console.log(`${output7}`);

// User pattern Rock, Paper, Scissors
const output8 = network.run(1,2,3);

console.log('User Picked Rock, Paper, Scissors:');
console.log(`${output8}`);

// User pattern Scissors, Paper, Rock
const output9 = network.run(3,2,1);

console.log('User Picked Scissors, Paper, Rock:');
console.log(`${output9}`);

// User pattern long
const output9 = network.run(3,2,1,3,1,2,3,1,2,2,1,3,2,3,3,1,2);

console.log('User Pattern Long');
console.log(`${output9}`);