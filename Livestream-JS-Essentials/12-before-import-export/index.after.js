// Import and Export

// install moment first, then:
import moment from 'moment';
console.log(moment().format('YYYY-MM-DD'));

// default exports can be given any name you want
import m from 'moment';
console.log(m().format('YYYY-MM-DD'));

// named exports have to match the module name
import { get } from 'lodash';
console.log(get({ a: { b: { c: 7 } } }, 'a.b.c'));

// but you can also rename them
import { get as _get } from 'lodash';
console.log(_get({ a: { b: { c: 7 } } }, 'a.b.c'));

// sometimes you want ALL of the named exports
import * as _ from 'lodash';
console.log(_.get({ a: { b: { c: 7 } } }, 'a.b.c'));

// imports can't be conditional
if (true) {
  // this is an error:
  // import * as __ from 'lodash';
}

// imports can't be dynamic
// import * as __ from 'lo' + 'dash';

// we'll refactor this into a new file and import it
// function printName(user) {
//   console.log(`${user.firstName} ${user.lastName}`);
// }
import hi, { printName, BASE_URL } from './user.after';
printName({ firstName: 'Dave', lastName: 'Ceddia' });
hi();
console.log(BASE_URL);
