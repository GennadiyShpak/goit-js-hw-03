'use strict';
const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};

user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = false;
const values = Object.keys(user);
for (let value of values) {
  console.log(`${value}: ${user[value]}`);
}
