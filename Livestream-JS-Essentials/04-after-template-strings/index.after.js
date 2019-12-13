// Template Strings a.k.a. String Interpolation

const firstName = 'Dave';
const lastName = 'Ceddia';

// good old + operator:
const fullName = firstName + ' ' + lastName;
console.log(fullName);

// rewritten with template strings
const es6FullName = `${firstName} ${lastName}`;
console.log(es6FullName);

// great for building URLs!
const url = 'http://mything.com/posts/' + postId + '/comments/' + commentId;
const es6Url = `http://mything.com/posts/${postId}/comments/${commentId}`;
