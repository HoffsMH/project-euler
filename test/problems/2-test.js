import assert from 'assert';
import {
  default as solution,
  sumOfAllEvenFibs,
} from '../../problems/1';

describe('Problem 2', () => {
  describe('#solution()', () => {
    context('when given no arguments', () => {
      const args = undefined;
      it('returns the anser to the default euler question', () => {
        assert.equal(solution(args), 233168,
          'returns correct answer');
      });
    });

    context('when given invalid arguments', () => {
      const args = { maxx: 2342 };

      it('throws an invalid argument error', () => {
        assert.throws(
          () => solution(args), 
          e => e.message === 'Invalid Arguments',
          'throws an invalid argument error'
        )
      })
    });
  });
});
