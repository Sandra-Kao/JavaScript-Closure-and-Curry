console.clear();

// Curry 01
function outer(a) {
  return function(b) {
    return a+b;
  };
};
console.log( outer(5) ); //return a inner function with-in outer()
// Example:
// It will return:
//    function(b) {
//      return a+b;
//    };
//
console.log( outer(5)(10) ); //return inner function(5)
// Example:
// It will return:
//    function(10) {
//      return  a + 10;
//    };
//


// Curry 02
const curryAdd = (a) => (b) => {return a + b}; //For shotcut
console.log( curryAdd(5)(10) ); //=>15


// Curry 03 
// Setp by step
const curry = (a)=>{
  return (b)=>{
    return a+b;
  };
};
console.log( curry(5)(10) ); //=>15


const outerCurryWith5 = curry(5);
console.log( outerCurryWith5(10) ); //=>15


const outerCurryWith11 = curry(11);
console.log( outerCurryWith11(10) ); //=>21







//const partialApply = (fn, ...fixedArgs) => {
//  return function (...remainingArgs) {
//    return fn.apply(this, fixedArgs.concat(remainingArgs));
//  };
//};
//const add = (a, b) => a + b;
//const add10 = partialApply(add, 10);
//console.log( add10(5) );
