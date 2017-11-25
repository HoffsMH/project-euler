import _ from 'lodash';

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

export default function problem(args = { max: 1000, div: [3, 5]}) {
  return execute(args);
}

function execute({ max, div }) {
  const arr = [];

  _.times(max, (i) => (_.find(div, (k) => i % k ===0)) ? arr.push(i):'')

  return _.sum(arr);
}

