import { Faker, ru } from '@faker-js/faker';
import { createHash } from 'node:crypto';
/*
Вам необходимо разработать сервис для авторизации пользователей.
Примерно такие же сервисы используются в большинстве Backend приложений.

Вам нужно реализовать 2 функции:
* register() - получает на вход данные типа RegisterData с указанием почты, пароля и имени человека.
* login() - получает на вход данные типа LoginData с указанием почты и пароля.

Каждый новый зарегистрированный пользователь получает свой id, используя faker.string.nanoid

Данные пусть будут храниться в массиве database, представим что это наша "база данных"

Пароль хранить в базе данных в "открытом" виде НЕБЕЗОПАСНО и на самом деле никто так не делает.
Пароли всегда хранятся в захешированном виде (напр. библиотека bcrypt), но пока хватит примитивных
методов хеширования - будем использовать sha256, я уже оставил вам функцию generateHash,
в неё вы можете передать строку, а в ответе получите эту строку в захешированном виде.

Если пользовать регистрируется, ему должно вывестись сообщение.
Если происходит попытка входа для несуществующего пользователя, должно вывестить сообщение

При 3-х ПОДРЯД неверный попытках ввода дальнейшие входы блокируются.

Если пользователь ввел пароль неверный в первый или второй раз - вывести сообщение
Если пользователь ввел пароль неверно в третий раз ПОДРЯД - сообщение с информацией о блокировке
 */
import { createHash } from 'node:crypto';

export const faker = new Faker({
  locale: [ru],
});

// Микс
type Merge = {
  merges?: string | null;
};
const obj1: Merge = {};
const obj2: Merge = {
  merges: null,
};
const obj3: Merge = {
  merges: '',
};
const obj4: Merge = {
  merges: 'нормальная',
};

console.log(obj1.merges || 'не обнаружено');
console.log(obj2.merges || 'не обнаружено');
console.log(obj3.merges || 'пусто');
console.log(obj4.merges || 'пусто');

// Генерация списков дел для пользователей
const possibleTasks = ['Купить кота', 'Продать кота', 'Помыть кота', 'Купить арбуз'];

type User = {
  id: string; // nanoid длиной 6 символов, используйте faker.string.nanoid
  name: string; // обязательно русское
  email: string;
  company: string; // название компании (использовать .company)
  tasks: string[]; // От 0 до 2х рандомных задач из массива possibleTasks (взять используя faker.helpers)
};

export const generateRandomUser = (n: number): User[] => {
  const newUser: User[] = [];
  for (let i = 0; i < n; i++) {
    faker.locale = 'ru';
    newUser.push({
      id: faker.string.nanoid(6),
      name: faker.person.fullName({ sex: 'male' }),
      email: faker.internet.email(),
      company: faker.company.name(),
      tasks: faker.helpers.arrayElements(possibleTasks, { min: 0, max: 2 }),
    });
  }
  return newUser;
};
const numberUser = Math.round(Math.random() * (6 - 3) + 3);
// console.log(generateRandomUser(numberUser));

const taskUsers = () => {
  const users = generateRandomUser(numberUser);
  const arrayTaskUsers: string[] = [];
  for (let i = 0; i < users.length; i++) {
    arrayTaskUsers.push(
      `Пользователь ${users[i].name} (id=${users[i].id}): ${users[i].tasks.length || 'нет'} дел на сегодня`,
    );
  }
  return arrayTaskUsers.join('\n');
};
console.log(taskUsers());

// Чек в магазине
// Напишите функцию, которая принимает заказ, и выводит чек по этому заказу.

type User = {
  id: number;
  name?: string;
  email: string;
};

type Item = {
  id: number;
  name: string;
  price: number;
  count?: number; // Если count не указан, по умолчанию считать количество 1
};

type DiscountCard = {
  id: number;
  series: number;
};

type Order = {
  id: number;
  user: User | null;
  card: DiscountCard | null;
  items: Item[];
};

const userOrders = (order) => {
  console.log(`Заказ #${order.id}`);
  console.log('------------');
  if (order.user) {
    console.log('Клиент:');
    for (const orderKey in order.user) {
      console.log(`${orderKey}: ${order.user[orderKey]}`);
    }
    console.log('------------');
  } else {
    console.log('Клиент: Не указан');
    console.log('------------');
  }
  if (order.card) {
    console.log('Скидочная карта:');
    for (const orderKey in order.card) {
      console.log(`${orderKey}: ${order.card[orderKey]}`);
    }
    console.log('------------');
  } else {
    console.log('Скидочная карта: Не применена');
    console.log('------------');
  }
  if (order.items) {
    console.log('Список покупок:');
    for (let i = 0; i < order.items.length; i++) {
      console.log(`- ${order.items[i].name} ${order.items[i].price} ${order.items[i].count || '1'}шт`);
    }
    console.log('------------');
  }
  const arr = order.items.reduce((sum, num) => sum + num.price * (num.count || 1), 0);
  const sumCount = order.items.reduce((sum, num) => sum + (num.count || 1), 0);
  console.log(`Итого ${sumCount} позиций на ${arr}руб`);

  return '';
};

const order: Order = {
  id: 3,
  user: {
    id: 5,
    name: 'Алексей',
    email: 'example@domain.com',
  },
  card: { id: 8, series: 6374634 },
  items: [
    { id: 6, name: 'Хлеб', price: 75, count: 3 },
    { id: 9, name: 'Вафли', price: 95.9, count: 1 },
    { id: 12, name: 'Набор конфет', price: 350 },
  ],
};

console.log(userOrders(order));

/**
 * Вам необходимо разработать сервис для авторизации пользователей.
 * Примерно такие же сервисы используются в большинстве Backend приложений.
 */
function generateHash(rawText: string): string {
  return createHash('sha256') // выбираем алгоритм SHA-256
    .update(rawText) // обновляем хеш данными
    .digest('hex'); // выводим результат в шестнадцатеричном формате
}

type Users = {
  // Опишите поля
  id: string;
  name: string;
  email: string;
  password: string;
  count: number;
};

type LoginData = {
  // Опишите поля
  name: string;
  email: string;
  password: string;
};

type RegisterData = {
  // Опишите поля
  name: string;
  password: string;
  email: string;
};

const database: Users[] = [];

const register = (data: RegisterData) => {
  const newUser = {
    id: faker.string.nanoid(6),
    name: data.name,
    email: data.email,
    password: generateHash(data.password),
    count: 0,
  };
  database.push(newUser);
  return `${newUser.name}, вы успешно зарегистрированы, ваш id - ${newUser.id}`;
};

const login = (data: LoginData) => {
  const { email, password } = data;

  for (const user of database) {
    if (user.email === email) {
      const passwordCorrect = generateHash(password) === user.password;
      if (passwordCorrect) {
        console.log(`Добро пожаловать, ${user.name}`);
      } else {
        if (user.count === 3) {
          console.log('Вы заблокированы!');
        } else if (user.count === 2) {
          console.log('Неверный пароль! Вы заблокированы!');
          user.count++;
        } else {
          console.log('Неверный пароль!');
          user.count++;
        }
      }

      return;
    }
  }
};

console.log('Пользователь не найден!');
/**
 * Ниже идут примеры использования ваших функций
 */

const maxim: LoginData = { name: 'maxim', email: 'maxim@gmail.com', password: '123456' };
const mihail: LoginData = { name: 'mihail', email: 'mihail@gmail.com', password: '223223' };

console.log(register(maxim)); // maxim, вы успешно зарегистрированы, ваш id - jYhvZ!
console.log(register(mihail)); // mihail, вы успешно зарегистрированы, ваш id - oPgxU!

/**
 * Проверяем Максима, он должен на первый раз успешно войти,
 * а дальше за 3 неверных входа заблокироваться
 */
console.log('Проверка Максима:');
const maximLoginData: LoginData = { ...maxim };
// console.log(maximLoginData);

console.log(login(maximLoginData)); // Добро пожаловать, maxim

maximLoginData.password = '--';

login(maximLoginData); // Неверный пароль!
login(maximLoginData); // Неверный пароль!
login(maximLoginData); // Неверный пароль! Вы заблокированы!
//
// maximLoginData.password = '123456';
// login(maximLoginData); // Вы заблокированы!
// login(maximLoginData); // Вы заблокированы!
//
// /**
//  * Проверяем Михаила, счетчик его неверных попыток входа должен сбрасываться
//  * Блокировка не должна происходить
//  */
// console.log('\n\nПроверка Михаила:');
// const mihailLoginData: RegisterData = { ...mihail };
//
// login(maximLoginData); // Добро пожаловать, mihail
//
// mihailLoginData.password = '-';
// login(maximLoginData); // Неверный пароль!
// login(maximLoginData); // Неверный пароль!
//
// mihailLoginData.password = mihail.password;
//
// login(maximLoginData); // Добро пожаловать, mihail
//
// mihailLoginData.password = '-';
// login(maximLoginData); // Неверный пароль!
// login(maximLoginData); // Неверный пароль!
//
// mihailLoginData.password = mihail.password;
//
// login(maximLoginData); // Добро пожаловать, mihail
//
// /**
//  * Проверяем несуществующего пользователя
//  */
// console.log('Проверяем несуществующего пользователя:');
// login({ email: 'a@a.a', password: 'a' }); // Пользователь не найден!
