'use strict';
const countProps = function (obj) {
  const props = Object.keys(obj);
  let total = 0;
  for (let prop of props) {
    total += 1;
  }
  return total;
};

console.log(countProps({})); // 0

console.log(countProps({ name: 'Mango', age: 2 })); // 2

console.log(countProps({ mail: 'poly@mail.com', isOnline: true, score: 500 })); // 3
