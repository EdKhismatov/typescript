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
