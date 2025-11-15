/*
Вам даны 2 пользователя банковской системы.
У каждого пользователя есть список проведенных операций по банковской карте.
Каждая операция может быть как положительной (пополнение), так и отрицательной (снятие).

При открытии счета у пользователя есть стартовый баланс - он может быть как отрицательным, так и положительным.

Напишите функцию calculateBalanceForUser(user: User): number, которая принимает на вход объект типа User,
а возвращает число - текущий баланс пользователя.
С помощью reduce просто просуммируйте стартовый баланс и все операции.
 */

type Transaction = {
  id: number;
  diff: number;
};

export type User = {
  id: number;
  name: string;
  startBalance: number;
  transactions: Transaction[];
};

const alexander: User = {
  id: 37,
  name: 'AleX',
  startBalance: 0,
  transactions: [
    { id: 8, diff: 100 },
    { id: 30, diff: -50 },
    { id: 23, diff: 250 },
  ],
};

const max: User = {
  id: 40,
  name: 'MaX',
  startBalance: -3,
  transactions: [
    { id: 4, diff: 9 },
    { id: 5, diff: -18 },
    { id: 5, diff: 3 },
  ],
};

const calculateBalanceForUser = (user: User): number => {
  return user.transactions.reduce((acc, cur) => acc + cur.diff, user.startBalance);
};

const alexanderBalance = calculateBalanceForUser(alexander); // Его история операция: 0 + 100 - 50 + 250
console.log(alexanderBalance); // 300

const maxBalance = calculateBalanceForUser(max); // Его история операция: -3 + 9 - 18 + 3
console.log(maxBalance); // -9
