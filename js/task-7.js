// Напиши скрипт управления личным кабинетом интернет банка. Есть объект account в котором необходимо реализовать методы для работы с балансом
// и историей транзакций.

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */
const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  balance: 0,

  // История транзакций
  transactions: [],

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */
  createTransaction(amount, type) {
    const ids = function () {
      let a = Math.trunc(Math.random() * 1e8);
      return a;
    };
    this.transactions['id'] = ids();
    this.transactions['amount'] = amount;
    if (amount > 0) {
      this.transactions['type'] = 'deposit';
    }
    if (amount < 0) {
      this.transactions['type'] = 'withdraw';
    }

    return this.transactions;
  },

  /*
   * Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */
  deposit(amount) {
    const { DEPOSIT, WITHDRAW } = Transaction;
    console.log(DEPOSIT);
    console.log(WITHDRAW);
    // this.createTransaction();
  },

  /*
   * Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */
  //   withdraw(amount) {},

  /*
   * Метод возвращает текущий баланс
   */
  //   getBalance() {},

  /*
   * Метод ищет и возвращает объект транзации по id
   */
  //   getTransactionDetails(id) {},

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */
  //   getTransactionTotal(type) {},
};

// console.table(account.createTransaction(-550));
// account.deposit({ amount: 550, type: 'deposit' });
console.table(account.deposit(550));
// console.log(account.createTransaction(550, 'deposit'));
// console.log(account.createTransaction(22, 'deposit'));
// console.log(account.createTransaction(55540, 'deposit'));
