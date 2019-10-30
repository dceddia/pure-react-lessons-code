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

