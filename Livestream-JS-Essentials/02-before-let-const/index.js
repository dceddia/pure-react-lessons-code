// function vs block scope
//   var: scoped to the enclosing function
//   let: scoped to the enclosing block
function scopeTest() {
  var outerVar = 'outer var';
  let outerLet = 'outer let';
  if (true) {
    var innerVar = 'inner var';
    let innerLet = 'inner let';
  }
}
scopeTest();

// // var vs. let inside a closure
// //   var: creates one variable, closure latches on
// //   let: creates a new variable for each iteration
// function printNumbers() {
//   for (var i = 0; i < 5; i++) {
//     console.log(i);
//   }
// }
// printNumbers();

// // let vs. const
// //   let: reassign all you want.
// //   const: the reference is read-only,
// //          but the internals are not!
// function constIsKindaConstant() {
//   let thing = 5;
//   console.log(thing);
//   thing = "now i'm a string";
//   console.log(thing);
// }
// constIsKindaConstant();
