/*
Напишите функцию, которая принимает на вход строку, состоящую из открывающихся и закрывающихся скобок,
и возвращает true или false - правильный ли порядок открытия и закрытия скобок.
Правильным порядком считается ситуация, когда скобки закрываются в таком же порядке, в котором и открывались.
*/

// console.log(check('()')); // true
// console.log(check('({})')); // true
//
// console.log(check('(){}[]')); // true
//
// console.log(check('({[({()})]})')); // true
// console.log(check('(){}([])[[[]]]{}()')); // true
//
// console.log(check('(({})')); // false
// console.log(check('({}))')); // false
// console.log(check('([})')); // false
// console.log(check(')(')); // false
// console.log(check(')(}][{')); // false

/*
Вам дан список сотрудников компании.
У каждого сотрудника, кроме генерального директора, есть начальник.

Описание полей:
id - id самого сотрудника
name - имя самого сотрудника
title - должность текущего сотрудника
chiefId - id сотрудника, который является начальником текущего сотрудника


Ваша задача - вывести цепочку сотрудников согласно их подчинению.
Например, Алексей Иванов является генеральным директором, потому что у него нет начальник (chiefId=null),
далее ищем его подчиненного, то есть такого сотрудника, у которого в chiefId указан гендир (chiefId=42).
И так далее, пока не выведем всех сотрудников компании.

Гарантируется, что цепочка подчинения линейная, то есть у каждого человека может быть
только один другой сотрудник в подчинении, и у каждого сотрудника может быть только один начальник.

Вывод должен быть таким:

Алексей Иванов (Chief Executive Officer)
Ирина Петрова (co-Chief Executive Officer)
Дмитрий Соколов (Chief Operating Officer)
Екатерина Смирнова (Chief Product and Technology Officer)
Сергей Кузнецов (Chief Technical Officer)
Ольга Васильева (Tech Lead)
Николай Михайлов (Team Lead)
Марина Федорова (Backend Developer)
 */

export type User = {
  id: number;
  name: string;
  chiefId: number | null;
  title: string;
};

const chief = (arr: User[]) => {
  const array: User[] = [];
  let idChief;
  for (const user of arr) {
    const { id, name, chiefId, title } = user;
    if (!chiefId) {
      array.push(user);
      idChief = id;
    }
    if (idChief === chiefId) {
      idChief = chiefId;
      array.push(user);
    }
  }
  return array;
};

const employees: User[] = [
  { id: 59, name: 'Екатерина Смирнова', chiefId: 12, title: 'Chief Product and Technology Officer' },
  { id: 4, name: 'Николай Михайлов', chiefId: 34, title: 'Team Lead' },
  { id: 12, name: 'Дмитрий Соколов', chiefId: 87, title: 'Chief Operating Officer' },
  { id: 96, name: 'Марина Федорова', chiefId: 4, title: 'Backend Developer' },
  { id: 71, name: 'Сергей Кузнецов', chiefId: 59, title: 'Chief Technical Officer' },
  { id: 34, name: 'Ольга Васильева', chiefId: 71, title: 'Tech Lead' },
  { id: 42, name: 'Алексей Иванов', chiefId: null, title: 'Chief Executive Officer' },
  { id: 87, name: 'Ирина Петрова', chiefId: 42, title: 'co-Chief Executive Officer' },
];

console.log(chief(employees));
