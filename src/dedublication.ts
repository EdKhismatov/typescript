/* Напишите функцию, которая удаляет повторения символов из строки, сохраняя порядок.
  Для решения используйте reduce.
 */

const deduplicate = (line: string) => {
  return line.split('').reduce((acc, cur) => {
    if (acc[acc.length - 1] !== cur) {
      acc += cur;
    }
    return acc;
  }, '');
};

const result = deduplicate('uuunbbeliaaaaveeabbbblllllee');
console.log(result); // unbeliaveable
