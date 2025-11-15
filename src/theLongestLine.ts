/*
reduce. Самая длинная строка в массиве
Напишите функцию, которая получает на вход массив строк и возвращает самую длинную строку из массива.
  Для решения используйте reduce.
  
 */

const longesLine = (array: string[]) => {
  return array.reduce((acc, cur) => {
    if (acc.length < cur.length) {
      acc = cur;
    }
    return acc;
  }, '');
};

console.log(longesLine(['aaaaaa', 'bbbbbbb', 'ccccccccc', 'dd']));
