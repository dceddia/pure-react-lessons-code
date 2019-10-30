// Import and Export

import m from 'moment';
console.log(m().format('YYYY-MM-DD'));

import { get as _get } from 'lodash';
const o = {
  a: {}
};
console.log(_get(o, 'a.b.c'));

import * as L from 'lodash';
console.log(L.get(o, 'a.b.c'));

import hi, {
  printName,
  BASE_URL
} from './stuff/user';
hi();
printName({
  firstName: 'dave',
  lastName: 'ceddia'
});
console.log(BASE_URL);

