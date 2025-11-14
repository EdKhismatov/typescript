/*
Напишите функцию adultOwners, которая принимает на вход информацию об автомобиле,
 а возвращает сводку об автомобиле - его модель, VIN номер, гос. номер и список совершеннолетних владельцев.
 У каждого автомобиля есть "паспорт технического средства" (птс, pts), в паспорте указаны все бывшие владельцы,
 у каждого владельца есть свой возраст.
Использования filter и map обязательно!
 */
export type User = {
  id: number;
  name: string;
  age: number;
};

type Car = {
  id: number;
  title: string;
  vin: string;
  serial: string;
  pts: Pts;
};

type Pts = {
  id: number;
  vin: string;
  owners: User[];
};

type Adult = {
  Автомобиль: string;
  VIN: string;
  'Гос. номер': string;
  'Совершеннолетние владельцы': string[];
};

const adultOwners = (prius: Car) => {
  const arrayPrius: Car[] = [prius];
  const adultOwnersCar: Adult[] = arrayPrius.map((el: Car) => {
    const array = prius.pts.owners.filter((el: User) => el.age >= 18);
    return {
      Автомобиль: el.title,
      VIN: el.vin,
      'Гос. номер': el.serial,
      'Совершеннолетние владельцы': array.map((el: User) => {
        return `${el.name} (${el.age})`;
      }),
    };
  });

  return adultOwnersCar;
};

const prius: Car = {
  id: 38,
  title: 'Toyota Prius',
  vin: 'JTDKARFP9L3128187',
  serial: 'А777МР97',
  pts: {
    id: 849325,
    vin: 'JTDKARFP9L3128187',
    owners: [
      { id: 3401, name: 'Лёха Перекуп', age: 35 },
      { id: 1946, name: 'Вячеслав', age: 14 },
      { id: 9613, name: 'Стас', age: 7 },
      { id: 9613, name: 'Татьяна', age: 18 },
      { id: 6542, name: 'Стас друг Лёхи Перекупа', age: 73 },
      { id: 6542, name: 'Валентин', age: 73 },
    ],
  },
};

console.log(prius.pts.owners.filter((el: User) => el.age >= 18));

const res = adultOwners(prius);
console.log(res);

/*
Автомобиль "Toyota Prius"
VIN: JTDKARFP9L3128187
Гос. номер: А777МР97
Совершеннолетние владельцы: Лёха Перекуп (35), Татьяна (18), Валентин (73)
 */
