/* Создайте функцию, принимающую неопределенное количество аргументов, и возвращающую объект, в котором будет
подсчитано количество различных
типов переданных аргументов,для подсчёта используйте reduce и оператор typeof.
 */
type Arr = string | number | boolean | object | undefined;
const countTypes = (...array: Arr[]) => {
  const obj = array.reduce((acc: any, cur): object => {
    if (!acc[typeof cur]) {
      acc[typeof cur] = 0;
    }
    acc[typeof cur] += 1;
    return acc;
  }, {});
  return obj;
};

const func = () => '';
console.log(countTypes(3, true, 'a', 1, {}, () => {}, 4, [], undefined, false, 0, undefined, func, {}, ''));

// Ожидаемый вывод:
// { number: 4, boolean: 2, string: 2, object: 3, function: 2, undefined: 2 }
