import { divider, filterByRole, generateRandomUser, joinWithCase, Style } from './type';
// Создайте такой тип A, при котором фрагмент кода ниже успешно запустится без ошибок:
// type SomeStructure1 = Record<string, number | string>;
//
// type A = {
//   age?: number | string;
//   nick: string;
//   info: (number | string)[] | object;
//   photo?: string | null;
// };
//
// const a1: A = {
//   age: 10,
//   nick: 'mynick',
//   info: [1, 100],
//   photo: 'string',
// };
//
// const a2: A = {
//   age: '10 years',
//   nick: '',
//   info: { id: 100 },
//   photo: null,
// };
//
// const a3: A = {
//   nick: '       ',
//   info: ['secret', 'key'],
// };
//
// const a4: A = {
//   nick: '',
//   info: {},
// };

// Напишите функцию, которая на вход получает массив объектов и выдает сумму значений всех полей всех объектов.
//   Гарантируется, что в объекте будут содержаться только числа.
//   Для типизации входных данных используйте Record (про него выше описано)
// const func = (obj: Record<string, number>[]): number => {
//   let summa: number = 0;
//   for (let i = 0; i < obj.length; i++) {
//     for (const objKey in obj[i]) {
//       summa += obj[i][objKey];
//     }
//   }
//   return summa;
// };
// console.log(func([{ a: 20, b: 30 }, {}, { a: 3 }, { x: 5 }])); // 58
/*
Напишите функцию, которая получает на вход семью и выводит в консоль список покупок этой семьи.
Если название продукта имеет чётное количество знаков - выведите название ЗАГЛАВНЫМИ БУКВАМИ, например
Опишите типы:
* Product
* Person
* Family
Часть данных вам уже дана, осталось доработать функцию.
Вывод программы должен быть таким же, как в скриншоте ниже.
 */

// type Product = {
//   name: string;
//   count: number;
// };
//
// type Person = {
//   name: string;
//   products: Product[];
// };
//
// export type Family = {
//   name: string;
//   persons: Person[];
// };
//
// const family: Family = {
//   name: 'Алексеевы',
//   persons: [
//     {
//       name: 'Отец',
//       products: [
//         { name: 'Кофе', count: 2 },
//         { name: 'Колбаса', count: 3 },
//         { name: 'Огурцы', count: 3 },
//       ],
//     },
//     {
//       name: 'Мать',
//       products: [
//         { name: 'Молоко', count: 1 },
//         { name: 'Сыр', count: 74 },
//       ],
//     },
//     {
//       name: 'Дочь',
//       products: [
//         { name: 'Конфеты', count: 29 },
//         { name: 'Лимонад', count: 30 },
//         { name: 'Салат', count: 3 },
//         { name: 'Помидоры', count: 3 },
//       ],
//     },
//     {
//       name: 'Сын',
//       products: [{ name: 'Чипсы', count: 1 }],
//     },
//   ],
// };
//
// const familis = (obj: Family) => {
//   console.log('Список покупок "Алексеевы"');
//   for (let i = 0; i < obj.persons.length; i++) {
//     console.log(`${obj.persons[i].name}:`);
//     obj.persons[i].products.forEach((el) => {
//       console.log(`* ${el.name} (${el.count})`);
//     });
//   }
//   return '';
// };
// console.log(familis(family));

// console.log(palindrom('топот'));
//
// console.log(isTwins(123, 321)); // true
// console.log(isTwins(123456789, 987654321)); // true
// console.log(isTwins(121, 211)); // false

// console.log(
//   printOrder({
//     id: 4,
//     amount: 2,
//     status: 'Готово',
//   }),
// );

// console.log(users());
// console.log(generateRandomUser(10));
console.log(filterByRole(generateRandomUser(10), 'admin'));

console.log(divider(123));

const testCase3 = ['uSEr', 'FIRST', 'Login', 'dATE'];

console.log(joinWithCase(testCase3, Style.PascalCase)); // UserFirstLoginDate
console.log(joinWithCase(testCase3, Style.camelCase)); // userFirstLoginDate
console.log(joinWithCase(testCase3, Style.snake_case)); // user_first_login_date
console.log(joinWithCase(testCase3, Style['kebab-case'])); // user-first-login-date
