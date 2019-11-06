"use strict";
function printThis() {
  console.log(this);
}

const printThisAgain = () => {
  console.log(this);
}

printThis.bind(4323)();

const fn = printThis.bind(22);
fn();

printThisAgain.bind(43)();