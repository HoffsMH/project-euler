import _ from 'lodash';
import validateArgs from '../common/validate-args';

// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.
// Find the sum of all the multiples of 3 or 5 below 1000.

const validateArgsThen = validateArgs((args) => {
  return (
    args && 
    typeof args === 'object' && 
    args.divArr && 
    args.max
  );
});

export default function solution(args = { max: 1000, divArr: [3, 5] }) {
  return allNumbersDivisible(args);
}

export function allNumbersDivisible(args) {
  return validateArgsThen(sumAllDivisibles, args)
}

function sumAllDivisibles({ max, sum = 0, divArr }) {
  const num = max - 1
  if (!num) return sum;

  return sumAllDivisibles({ 
    max: num, 
    divArr,
    sum: isDivisibleByAny(num, divArr) ? 
      sum + num : 
      sum
  });
}

function isDivisibleByAny(num, divArr) {
  return _.find(divArr, (i) =>
    isDivisible({ num, div: i }));
}

function isDivisible({ num, div }) {
  return num % div === 0;
}

