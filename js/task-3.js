'use strict';
const findBestEmployee = function (employees) {
  const outputs = Object.entries(employees);
  let biggestOutput = ['', 0];
  for (let employee of outputs) {
    if (biggestOutput[1] < employee[1]) {
      biggestOutput = employee;
    }
  }
  return biggestOutput[0];
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(
  findBestEmployee({
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
  }),
); // lorence

console.log(
  findBestEmployee({
    poly: 12,
    mango: 17,
    ajax: 4,
  }),
); // mango

console.log(
  findBestEmployee({
    lux: 147,
    david: 21,
    kiwi: 19,
    chelsy: 38,
  }),
); // lux
