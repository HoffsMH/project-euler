import assert from 'assert';
import {
  default as solution,
  smallestEvenDividend,
} from '../../problems/5';

describe('Problem 5', () => {
  describe('#solution()', () => {
    context('when given no arguments', () => {
      const args = undefined;

      it('returns the answer to the default euler problem', () => {
        assert.equal(solution(args), 232792560,
          'after alot of time yields the correct answer');
      });
    });

    context('when given really large arguments', () => {
      const args = { min: 1, max: 40 };

      it('returns the correct answer after sometime', () => {
        assert.equal(solution(args), 5342931457063200,
          'after alot of time yields the correct answer')
      });
    });
  });
});
