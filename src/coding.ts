export type User = {
  name: string;
  surname: string;
  faaang: string;
  x: string;
};

const user: User = {
  name: 'aaabcdeeeef',
  surname: 'hhfooodgeeeerg',
  faaang: 'ffaanngg',
  x: 'xxxxxxxxxxxxxxxxxxxx',
};

// ... Ваш код
const encode = (obj: User): string => {
  const newObj = [];
  const objKey = Object.keys(obj);
  const objValue = Object.values(obj);
  let numberLetters = '';
  const count = 0;
  for (const numberLetter of objValue) {
    for (let i = 0; i < numberLetter.length; i++) {
      if (numberLetter[i] === numberLetter[i + 1]) {
        numberLetters += numberLetter[i];
      }
    }
    newObj.push(numberLetters);
  }
  return '';
};

// --------- Проверка кодирования
const encoded: string = encode(user);
const expectedEncoded = '{"name":"a3bcde4f","surname":"h2fo3dge4rg","fa3ng":"f2a2n2g2","x":"x20"}';

// console.log('Закодированная строка', encoded);
// console.log('Кодирование:', encoded === expectedEncoded ? 'ВЕРНО' : 'ОШИБКА', '\n');
//
// // --------- Проверка декодирования
// const decoded: User = decode<User>(encoded);
// console.log('Декодированный объект', decoded);
//
// try {
//   deepStrictEqual(decoded, user);
//   console.log('Декодирование ВЕРНОЕ!');
// } catch (e) {
//   console.log('Декодирование ОШИБКА!');
// }
