// Создайте такой тип A, при котором фрагмент кода ниже успешно запустится без ошибок:
type SomeStructure1 = Record<string, number | string>;

type A = {
  age?: number | string;
  nick: string;
  info: (number | string)[] | object;
  photo?: string | null;
};

const a1: A = {
  age: 10,
  nick: 'mynick',
  info: [1, 100],
  photo: 'string',
};

const a2: A = {
  age: '10 years',
  nick: '',
  info: { id: 100 },
  photo: null,
};

const a3: A = {
  nick: '       ',
  info: ['secret', 'key'],
};

const a4: A = {
  nick: '',
  info: {},
};
