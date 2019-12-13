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
  // console.log(innerVar, innerLet); // error
}
scopeTest();

// var vs. let inside a closure
//   var: creates one variable, closure latches on
//   let: creates a new variable for each iteration
function printNumbers() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }

  for (var i = 0; i < 5; i++) {
    // prints 5, 5 times, all at once
    setTimeout(() => console.log(i), 1000);
  }

  for (let i = 0; i < 5; i++) {
    // prints 0-4, all at once
    setTimeout(() => console.log(i), 1000);
  }

  for (let i = 0; i < 5; i++) {
    // prints 0-4, one per second
    setTimeout(() => console.log(i), 1000 * i);
  }
}
printNumbers();

// let vs. const
//   let: reassign all you want.
//   const: the reference is read-only,
//          but the internals are not!
function constIsKindaConstant() {
  let thing = 5;
  console.log(thing);
  thing = "now i'm a string";
  console.log(thing);

  // const thing = 5;
  // console.log(thing);
  // // fail:
  // thing = "now i'm a string";
  // console.log(thing);

  // const thing = [1, 2];
  // console.log(thing);
  // // fine!:
  // thing.push(3)
  // console.log(thing);
}
constIsKindaConstant();
