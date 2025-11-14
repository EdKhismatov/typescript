/* Доработайте функцию умного поиска, чтобы она работала как ожидается. Типы any пока оставьте.
 Задизейблите правило ес линта, если он ругается.
*/
export type User = {
  age: number;
  name: string | number;
};
const storage: User[] = [
  { age: 10, name: 'Alex' },
  { age: 20, name: 'Max' },
  { age: 30, name: 'Jake' },
  { age: 40, name: 'Lilo' },
];

const smartSearch = (arr: User[], property: keyof User, value: string | number) => {
  const filterUser = arr.filter((el) => {
    return el[property] === value;
  });
  return filterUser;
};

const person1 = smartSearch(storage, 'age', 30);
// { age: 30, name: 'Jake' }
console.log(person1);
const person2 = smartSearch(storage, 'age', 10);
// { age: 10, name: 'Alex' }
console.log(person2);
const person3 = smartSearch(storage, 'name', 'Lilo');
// { age: 40, name: 'Lilo' }
console.log(person3);
