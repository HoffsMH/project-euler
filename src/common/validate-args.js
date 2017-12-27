import _ from 'lodash';

let validateArgs = (fnToCheck, fnToExec, args) => {
  if (!fnToCheck(args)) { throw Error('Invalid Arguments'); }
  return fnToExec(args);
}

validateArgs = _.curry(validateArgs);

export default validateArgs
