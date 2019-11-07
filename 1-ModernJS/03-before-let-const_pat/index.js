// function vs block scope
//   var: scoped to the enclosing function
//   let: scoped to the enclosing block
function scopeTest() {
    console.log(outerVar, outerLet)
  var outerVar = 'outer var';
  let outerLet = 'outer let';
  console.log(outerVar, outerLet)
  if (true) {
        console.log(innerVar, innerLet)
    var innerVar = 'inner var';
    let innerLet = 'inner let';
      console.log(innerVar, innerLet)

  }
        // console.log(innerVar, innerLet)

}
scopeTest();

function printNumbers(){
    for(var i = 0; i < 5; i++){
        setTimeout( () =>   console.log(i), 100);
    }
}

printNumbers();

function printNumbersLet(){
    for(let i = 0; i < 5; i++){
        setTimeout( () =>   console.log(i), 100);
    }
}

printNumbersLet();

// let, const
const name = "pat";
// name = "someone else"
console.log(name);

const person = {
    name: 'Pat'

}
person.name = 'someone'
console.log(person);

const nums = [1, 2,3];
nums.push(4);
console.log(nums);