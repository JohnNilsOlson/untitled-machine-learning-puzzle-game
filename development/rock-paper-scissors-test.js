const brain = require('brain.js');
const data = require('./data.json');

const network = new brain.recurrent.LSTM();

const trainingData = data.map(item => ({
  input: item.move,
  output: item.lose
}));

network.train(trainingData, {
  iterations: 2000
});

// 1:  Rock
// 2:  Paper
// 3:  Scissors

const output1 = network.run(1);
const output2 = network.run(2);
const output3 = network.run(3);

console.log(`${output1}`);
console.log(`${output2}`);
console.log(`${output3}`);