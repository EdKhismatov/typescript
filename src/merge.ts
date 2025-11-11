import { Faker, ru } from '@faker-js/faker';

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
