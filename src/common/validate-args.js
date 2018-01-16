let validateArgs = fnToCheck => fnToExec => args => {
  if (!fnToCheck(args)) { throw Error('Invalid Arguments'); }
  return fnToExec(args);
}

export default validateArgs;
