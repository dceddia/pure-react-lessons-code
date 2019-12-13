// Import and Export
import foo from 'moment';

// console.log(foo().format('YYYY-MM-DD'));

import { get as _get } from 'lodash';
// console.log(_get({ a: { b: { c: 7 } } }, 'a.b.c', 'nope'));

import * as _ from 'lodash';
// console.log(_.get);

import def, { printName, sayHi } from './user';
printName({ first: 'Dave', last: 'Ceddia' });
sayHi();
def();
