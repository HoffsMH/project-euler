import _ from 'lodash';

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

export default function problem(args = { max: 1000, divArr: [3, 5]}) {
  return execute(args);
}

function execute(args) {
  return allNumbersDivisible(args)
}

function allNumbersDivisible({ max, divArr }) {
  const result = [];
  const range = _.range(1, max);

  return _.reduce(range, (sum, num) =>
    isDivisibleByAny(num, divArr) ? sum + num : sum, 0);
}

function isDivisibleByAny(num, divArr) {
  return _.find(divArr, (i) =>
    isDivisible({ num, div: i }));
}

function isDivisible({ num, div }) {
  return num % div === 0;
}
