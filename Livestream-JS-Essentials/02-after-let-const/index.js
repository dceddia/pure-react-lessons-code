// function vs block scope
//   var: scoped to the enclosing function
//   let: scoped to the enclosing block
function scopeTest() {
  console.log(outerVar, outerLet);
  var outerVar = 'outer var';
  let outerLet = 'outer let';
  console.log(outerVar, outerLet);
  if (true) {
    console.log(innerVar, innerLet);
    var innerVar = 'inner var';
    let innerLet = 'inner let';
    console.log(innerVar, innerLet);
  }
  console.log(innerVar);
}
// scopeTest();

// var vs. let inside a closure
//   var: creates one variable, closure latches on
//   let: creates a new variable for each iteration
function printNumbers() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => console.log(i), 1000 * i);
  }
}
// printNumbers();

function constIsKindaConstant() {
  let thing;
  thing = 10;
  console.log(thing);
}
constIsKindaConstant();
