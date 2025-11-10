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

// Создайте тип User, у которого должны быть поля id, email, password, role. Где role - енам, допустимые значения определите сами.
// Напишите функцию generateRandomUser(n), которая возвращает массив из n сгенерированных пользователей.
//   Поля каждого пользователя заполняйте случайно с помощью faker.
//   Напишите функцию filterByRole(users, role), которая принимает на вход массив пользователь и требуемую роль,
//   и возвращаешь массив, в котором будут только пользователи с требуемой ролью.
enum UserRole {
  guest = 'guest',
  user = 'user',
  admin = 'admin',
}
type Users = {
  id: string;
  email: string;
  password: string;
  role: UserRole;
};
export const generateRandomUser = (n: number): Users[] => {
  const newUser: Users[] = [];
  const roles = Object.values(UserRole);
  for (let i = 0; i < n; i++) {
    const randomRole = roles[Math.floor(Math.random() * roles.length)];
    newUser.push({
      id: faker.string.uuid(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      role: randomRole,
    });
  }
  return newUser;
};

export const filterByRole = (users: Users[], role: string): object[] => {
  const filteredIds = users.filter((el) => el.role === role);
  return filteredIds;
};

// Наибольшим делителем для числа A называется наибольшее число,
//   на которое A делится без остатка, но при этом не само число A (исключение - число 1)
export const divider = (n: number): number => {
  let count = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) {
      count = i;
    }
  }
  return count;
};

// Напишите функцию joinWithCase(words, usingCase), которая получает на вход 2 аргумента:
//   1. words - массив слов, которые необходимо объединить в одно слово
// 2. usingCase - название регистра, используя который необходимо объединить слова в одно

export enum Style {
  PascalCase = 'PascalCase',
  camelCase = 'camelCase',
  snake_case = 'snake_case',
  'kebab-case' = 'kebab-case',
}

export const joinWithCase = (testCase3: string[], style: Style): string => {
  const array: string[] = [];
  for (let i = 0; i < testCase3.length; i++) {
    if (style === Style.PascalCase) {
      array.push(testCase3[i].slice(0, 1).toUpperCase() + testCase3[i].slice(1).toLowerCase());
    } else if (style === Style.camelCase && i % 2 === 0) {
      array.push(testCase3[i].toLowerCase());
    } else if (style === Style.camelCase && i % 2 === 1) {
      array.push(testCase3[i].slice(0, 1).toUpperCase() + testCase3[i].slice(1).toLowerCase());
    } else if (style === Style.snake_case || style === Style['kebab-case']) {
      array.push(testCase3[i].toLowerCase());
    }
  }
  if (style === Style.PascalCase || style === Style.camelCase) {
    return array.join('');
  } else if (style === Style.snake_case) {
    return array.join('_');
  } else if (style === Style['kebab-case']) {
    return array.join('-');
  }
  return '';
};
