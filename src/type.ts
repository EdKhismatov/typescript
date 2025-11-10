import { faker } from '@faker-js/faker';
import chalk from 'chalk';
// Напишите функцию isTwins, которая получает на вход 2 числа, а возвращает являются ли эти числа близнецами.
// Близнецы - числа, являющиеся обратными друг другу.
// Конвертировать эти числа в строки запрещено! Иначе это просто предыдущая задача “Палиндром”!

export const isTwins = (num1: number, num: number): boolean => {
  let reversed = 0;
  const isNegative = num < 0;
  num = Math.abs(num);
  while (num > 0) {
    reversed = reversed * 10 + (num % 10);
    num = parseInt(String(num / 10));
  }
  const newNum = isNegative ? -reversed : reversed;
  return newNum === num1;
};

// Напишите функцию, которая принимает на вход строку, и возвращает true/false
// является ли эта строка палиндромом или нет.
export const palindrom = (str: string): boolean => {
  const newStr: string = str.split('').reverse().join('');
  return newStr === str;
};

// Создайте тип Order (заказ), у которого должны быть поля id, amount, status.
//   Поле статуса сделайте строковым литералом, возможные значения подберите сами.

type Order = 'Доставка' | 'Готово' | 'В пути';

type Person = {
  id: number;
  amount: number;
  status: Order;
};
export const printOrder = (obj: Person): string => {
  let statusFinal: string = '';
  if (obj.status === 'Доставка') {
    statusFinal = `Заказ #${obj.amount}: ${chalk.green('Доставка')}!`;
  } else if (obj.status === 'Готово') {
    statusFinal = `Заказ #${obj.amount}: ${chalk.green('Готово')}!`;
  } else if (obj.status === 'В пути') {
    statusFinal = `Заказ #${obj.amount}: ${chalk.green('В пути')}!`;
  }
  return statusFinal;
};

// Выведите в консоль объект пользователя, у которого будут поля - id, имя, возраст, адрес,
//   а так же информация о его животном - имя, вид, порода, и информация о его месте работы - город, компания,
//   должность, зарплату, валюту зарплаты.
//   Абсолютно все поля должны иметь случайные значения, сгенерированные @faker-js/faker
type UsersAnimal = {
  id: string;
  name: string;
  adress: string;
  jobTitle: string;
  city: string;
  currencyName: string;
  amount: string;
  nameDog: string;
  dog: string;
};
export const users = (): string => {
  console.log(faker.string.uuid(), 'id');
  console.log(faker.person.firstName(), 'имя');
  console.log(faker.location.streetAddress(), 'адрес');
  console.log(faker.person.jobTitle(), 'название должности');
  console.log(faker.location.city(), 'город');
  console.log(faker.finance.currencyName(), 'валюта');
  console.log(faker.finance.amount(), 'Зарплата');
  console.log(faker.animal.petName(), 'Имя собаки');
  console.log(faker.animal.dog(), 'порода');
  return '';
};
