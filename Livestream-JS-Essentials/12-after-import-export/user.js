export function printName(user) {
  console.log(user.first, user.last);
}

export function sayHi() {
  console.log('hi');
}

const theDefaultOne = () => {
  console.log("i'm the default");
};

export default theDefaultOne;
