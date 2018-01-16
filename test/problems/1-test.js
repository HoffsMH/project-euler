import assert from 'assert';
import {
  default as solution,
  allNumbersDivisible,
} from '../../problems/1';

describe('Problem 1', () => {
  describe('#solution()', () => {
    context('when given no arguments', () => {
      const args = undefined;
      it('should return the solution to the project euler default question', () => {
        assert.equal(solution(args), 233168,
          'correct number is returned');
      });
    });

    context('when given default arguments', () => {
      const args = { max: 1000, divArr: [3, 5] };
      it('should behave the same way that allNumbersDivisible does', () => {
        const defaultResult = solution(args);
        const allNumbersDivisibleResult = allNumbersDivisible(args);

        assert.equal(defaultResult, allNumbersDivisibleResult,
          'same result is returned');

      });
    });

    context('when given another set of valid arguments',() => {
      const args = { max: 10000, divArr: [3,5,7] };
      it('should behave the same way that allNumbersDivisible does', () => {
        const defaultResult = solution(args);
        const allNumbersDivisibleResult = allNumbersDivisible(args);

        assert.equal(defaultResult, allNumbersDivisibleResult,
          'same result is returned');
      })
    });
  });

  describe('#allNumbersDivisible()', () => {
    function assertInvalidArguments(e) {
      assert.equal(e.message, 'Invalid Arguments',
        'Invalid Arguments');
    }
    context('when given no arguments', () => {
      const args = undefined;
      it('should throw an invalid argument error', () => {

        try {
          allNumbersDivisible(args)
        } catch(e) {
          assertInvalidArguments(e);
        }
      });
    });

    context('when given an empty object', () => {
      const args = {};
      it('should throw an invalid argument error', () => {

        try {
          allNumbersDivisible(args)
        } catch(e) {
          assertInvalidArguments(e);
        }
      });
    });

    context('when given slightly invalid arguments', () => {
      const args = { max: 7, divArrr: [1,2] };
      it('should throw an invalid argument error', () => {

        try {
          allNumbersDivisible(args)
        } catch(e) {
          assertInvalidArguments(e);
        }
      });
    });

    context('when given valid arguments with small max', () => {
      const args = { max: 10, divArr: [3,5] };
      it('should throw an invalid argument error', () => {
        assert.equal(allNumbersDivisible(args), 23,
          'correct sum is returned');
      });
    });

    context('when given valid arguments with large max', () => {
      const args = { max: 91933, divArr: [3,5] };
      it('should throw an invalid argument error', () => {
        assert.equal(allNumbersDivisible(args), 1972097685,
          'correct sum is returned');
      });
    });
  });
});
