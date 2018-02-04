export default function compose(firstFn, ...remainingFns) {
  
  return isEmpty(remainingFns) ?
  firstFn :
  (...args) => compose(...remainingFns)(firstFn(...args));
}


function isEmpty(functionList) {
  return !functionList.length
}
