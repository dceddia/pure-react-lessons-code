'use strict';

const printThis = () => {
  console.log(this);
};

printThis.bind(42)();

