/*
Создайте функцию filterWithChance(arr, chance), которая получает на вход массив arr, и возвращает случайные
элементы массива с шансом chance.
Например, для filterWithChance([1, 2, 3, 4, 5, 6], 20) - функция должна пройтись по каждому элементу массива и с шансом 20% либо
взять его, либо с шансом 80% пропустить и не взять. Вспомните про Math.random().
Данные для тестов нужно генерировать с помощью @faker-js/faker.
 */
import { Faker, ru } from '@faker-js/faker';

export const faker = new Faker({
  locale: [ru],
});

const filterWithChance = (arr: number[], chance: any) => {
  const newArray: number[] = arr.filter((el) => chance() >= 20);
  return newArray;
};

const array = faker.string
  .numeric(10)
  .split('')
  .map((el) => Number(el));

const chance = (): number => {
  return Math.random() * 100;
};

console.log(filterWithChance(array, chance));
