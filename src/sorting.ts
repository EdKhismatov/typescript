/*
Создайте функцию, которая принимает на вход массив объектов типа User,
ключ для сортировки, и опционально направление сортировки - asc (по возрастанию) или desc (по убыванию) и Важно!
Возвращает новый отсортированный массив (а не меняет первоначальный), согласно требуемой сортировке.
Доработайте код ниже, чтобы он работал как ожидается.
В sortedByIdAsc, sortedByNameDesc, sortedByAgeDesc лежат новые отсортированные массивы.
В users данные какие были в начале, такие и остались в конце, они не трогались.
 */
export type User = { id: number; age: number; name: string };

const sort = (array: User[], key: string, direction: string = 'asc'): User[] => {
  // @ts-ignore
  const arrayAsc = [...array].sort((a, b) => a[key] - b[key]);
  // @ts-ignore
  const arrayDesc = [...array].sort((a, b) => b[key] - a[key]);
  if (key === 'age' || key === 'id') {
    return direction === 'asc' ? arrayAsc : arrayDesc;
  }
  if (key === 'name') {
    return direction === 'asc'
      ? [...array].sort((a, b) => a[key].localeCompare(b[key]))
      : [...array].sort((a, b) => b[key].localeCompare(a[key]));
  }
  return array;
};

const users: User[] = [
  { id: 1, age: 10, name: 'zxc' },
  { id: 3, age: 20, name: 'juk' },
  { id: 6, age: 2, name: 'aa' },
  { id: 9, age: 1, name: 'ab' },
  { id: 2, age: 5, name: 'zz' },
];

const sortedByIdAsc = sort(users, 'id');
console.log(sortedByIdAsc);
/* Отсортированы по увеличению id
[
  { id: 1, age: 10, name: 'zxc' },
  { id: 2, age: 5, name: 'zz' },
  { id: 3, age: 20, name: 'juk' },
  { id: 6, age: 2, name: 'aa' },
  { id: 9, age: 1, name: 'ab' }
]
 */

const sortedByNameDesc = sort(users, 'name', 'desc');
console.log(sortedByNameDesc);
/* Отсортированы по уменьшению имени
[
  { id: 2, age: 5, name: 'zz' },
  { id: 1, age: 10, name: 'zxc' },
  { id: 3, age: 20, name: 'juk' },
  { id: 9, age: 1, name: 'ab' },
  { id: 6, age: 2, name: 'aa' }
]
 */

const sortedByAgeDesc = sort(users, 'age', 'desc');
console.log(sortedByAgeDesc);
/* Отсортированы по уменьшению возраста
[
  { id: 3, age: 20, name: 'juk' },
  { id: 1, age: 10, name: 'zxc' },
  { id: 2, age: 5, name: 'zz' },
  { id: 6, age: 2, name: 'aa' },
  { id: 9, age: 1, name: 'ab' }
]
 */

console.log(users);
/* ПЕРВОНАЧАЛЬНЫЙ МАССИВ USERS ОСТАЛСЯ НЕ ТРОНУТЫМ!
[
  { id: 1, age: 10, name: 'zxc' },
  { id: 3, age: 20, name: 'juk' },
  { id: 6, age: 2, name: 'aa' },
  { id: 9, age: 1, name: 'ab' },
  { id: 2, age: 5, name: 'zz' }
]
 */
