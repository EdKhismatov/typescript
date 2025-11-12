import { Faker, ru } from '@faker-js/faker';
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

/**
 * Вам необходимо разработать сервис для авторизации пользователей.
 * Примерно такие же сервисы используются в большинстве Backend приложений.
 */
function generateHash(rawText: string): string {
  return createHash('sha256') // выбираем алгоритм SHA-256
    .update(rawText) // обновляем хеш данными
    .digest('hex'); // выводим результат в шестнадцатеричном формате
}
export type Users = {
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
