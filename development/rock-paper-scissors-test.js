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

console.log(`${output1} wins`);
console.log(`${output2} wins`);
console.log(`${output3} wins`);

// Random move.
const output4 = network.run();
console.log(`${output4}`);