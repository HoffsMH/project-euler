import assert from 'assert';
import {
  default as solution,
  sumOfAllEvenFibs,
} from '../../problems/2';

describe('Problem 2', () => {
  describe('#solution()', () => {
    context('when given no arguments', () => {
      const args = undefined;
      it('returns the anser to the default euler question', () => {
        assert.equal(solution(args), 4613732,
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

    context('when given valid arguments', () => {
      const args = { max: 2342 };

      it('returns the correct answer', () => {
        assert.equal(solution(args), 3382,
          'correct answer is given')
      })
    });
  });

  describe('#sumOfAllEvenFibs()', () => {
    context('when given valid arguments', () => {
      const args = { max: 2342 };

      it('returns the correct answer', () => {
        assert.equal(solution(args), 3382,
          'correct answer is given')
      });
    });
  });
});
