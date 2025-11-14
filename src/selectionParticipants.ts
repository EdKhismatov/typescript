import { Faker, ru } from '@faker-js/faker';

export const faker = new Faker({
  locale: [ru],
});
/*
Доработайте код, используя метод map , чтобы он работал как ожидается.
Функция processUsers обрабатывает участников соревнований, отбирает только совершеннолетних и
рандомно делит их на красную и синюю команду. Она принимает на вход массив пользователь,
а возвращает только совершеннолетних пользователь с указанием поля isAdult, а так же случайной командой (enum Team).
Использование map и filter обязательно!
 */
enum Team {
  red = 'red',
  blue = 'blue',
}

export type User = {
  id: number;
  name: string;
  age: number;
};

type ProcessedUser = {
  name: string;
  isAdult: boolean;
  team: Team;
};

const users: User[] = [
  { id: 7, name: 'Александр Сильвестрович', age: 17 },
  { id: 17, name: 'Райан Сергеевич Гослинг', age: 18 },
  { id: 27, name: 'Джейсон Райанович Стетхем', age: 19 },
  { id: 37, name: 'Имя не указано', age: 8 },
];

const processUsers = (users: User[]): ProcessedUser[] => {
  const usersAdult: ProcessedUser[] = users
    .filter((el: User) => el.age >= 18)
    .map((el: User) => {
      return {
        name: el.name,
        isAdult: true,
        team: faker.helpers.arrayElement([Team.red, Team.blue]),
      };
    });
  return usersAdult;
};

const processed: ProcessedUser[] = processUsers(users);

console.log(processed);
/*
Пример вывода! Команды будут случайными!
[
 { name: 'Райан Сергеевич Гослинг', isAdult: true, team: 'red' },
 { name: 'Джейсон Райанович Стетхем', isAdult: true, team: 'blue' },
]
 */
