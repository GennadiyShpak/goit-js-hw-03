const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};

const account = {
  balance: 0,

  transactions: [],

  createTransaction(amount, type) {
    const idTransaction = () => {
      return this.transactions.length + 1;
    };
    return {
      id: idTransaction(),
      amount: amount,
      type: type,
    };
  },

  deposit(amount) {
    const { DEPOSIT } = Transaction;
    let result;
    if (amount === 0 || amount < 0) {
      result =
        'Введено не коректное значение, пожалуйста введите сумму больше 0';
    } else {
      this.transactions.push(this.createTransaction(amount, DEPOSIT));
      this.balance += amount;
      result = `На счет добавленно ${amount} у.е.`;
    }
    return result;
  },

  withdraw(amount) {
    const { WITHDRAW } = Transaction;
    let result;

    if (amount === 0 || amount < 0) {
      result =
        'Введено не коректное значение, пожалуйста введите сумму больше 0';
    }
    if (amount > this.balance) {
      result = 'На счету недостаточно средств, пожалуйста введите другую сумму';
    } else {
      this.transactions.push(this.createTransaction(amount, WITHDRAW));
      this.balance -= amount;
      result = `С вашего счета снято ${amount} у.е.`;
    }
    return result;
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    return this.balance;
  },

  getTransactionDetails(id) {
    this.transactions.forEach(transaction => {
      if (id == transaction.id) return console.log(transaction);
    });
  },

  getTransactionTotal(type) {
    let result = 0;
    this.transactions.forEach(a => {
      if (type === a.type) {
        result += a.amount;
      }
      return console.log(result);
    });
  },
};
console.table(account.transactions);
console.table(account.deposit(10));
console.table(account.deposit(0));
console.table(account.deposit(25));
console.table(account.deposit(30));
console.table(account.deposit(40));
console.table(account.withdraw(10));
console.table(account.withdraw(20));
console.table(account.getTransactionDetails(2));
// console.table(account.getBalance());
// console.table(account.getTransactionTotal('deposit'));
// console.table(account.getTransactionTotal('withdraw'));
// console.table(account.transactions.type);
