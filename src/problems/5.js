import _ from 'lodash';
import validateArgs from '../common/validate-args';

// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder .
// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?

const validateArgsThen = validateArgs((args) => {
  return true
});

export default function solution(args = { min: 1, max :23 }) {
  return getLeastCommonMultiple(args);
};

export function getLeastCommonMultiple(args) {
  return validateArgsThen(_calculateLeastCommonMultiple, args);
};

function _calculateLeastCommonMultiple({ max, min, multiple = 1 }) {
  if (max === min)
      return multiple;

    return _calculateLeastCommonMultiple({
      multiple: leastCommonMultiple(multiple, min),
      max,
      min: min + 1
    });
}

function greatestCommonDivisor(a, b) {
  return !b ? a : greatestCommonDivisor(b, a % b);
}

function leastCommonMultiple(a, b) {
  return (a * b) / greatestCommonDivisor(a, b);
}
