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
const output5 = network.run(1,1,1);

console.log('User Picked Rock Three Times:');
console.log(`${output5}`);

const output6 = network.run(2,2,2);

console.log('User Picked Paper Three Times:');
console.log(`${output6}`);

const output7 = network.run(3,3,3);

console.log('User Picked Scissors Three Times:');
console.log(`${output7}`);

