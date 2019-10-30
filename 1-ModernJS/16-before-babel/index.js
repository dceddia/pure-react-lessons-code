// Go to https://babeljs.io/repl and try out this code

import * as _ from 'lodash';
import moment from 'moment';

function plainFn() {
  console.log('test');
}

const arrowFn = () => true;

const nums = [1, 2, 3];
const [a] = nums;

const user = {
  id: 1,
  firstName: 'Dave',
  lastName: 'Ceddia'
};
const copy = {
  ...user,
  fullName: `${user.firstName} ${user.lastName}`
};

