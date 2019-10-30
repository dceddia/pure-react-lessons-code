// Statements vs. Expressions

// *** Statements

/*
let a = 1 + 2

if(true) {
  //
}

for(...)
while(...)
try {

} catch(e) {

}
*/

// *** Expressions
var a = { hi: true };

function stuff() {
  return { hi: true };
}

if (Math.random() > 0.5) {
  a = 'yes';
} else {
  a = 'no';
}

a = Math.random() > 0.5 ? 'yes' : 'no';

