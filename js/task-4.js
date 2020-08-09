'use stric';
const countTotalSalary = function (employees) {
  const salary = Object.entries(employees);
  let totalSalary = 0;
  for (let employeeSalary of salary) {
    totalSalary += employeeSalary[1];
  }
  return totalSalary;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400
