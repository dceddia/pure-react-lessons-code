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

// var vs. let inside a closure
//   var: creates one variable, closure latches on
//   let: creates a new variable for each iteration
function printNumbers() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
}
printNumbers();

// let, const
const name = 'Dave';
// name = 'Someone else';
console.log(name);

const person = {
  name: 'Dave'
};
person.name = 'someone else';
console.log(person);

const nums = [1, 2, 3];
nums.push(4);
console.log(nums);

