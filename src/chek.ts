/*
 * Чек в магазине
 * Напиши функцию, которая принимает заказ, и выводит чек по этому заказу.
 */

type User = {
  id: number;
  name?: string;
  email: string;
};

type Item = {
  id: number;
  name: string;
  price: number;
  count?: number; // Если count не указан, по умолчанию считать количество 1
};

type DiscountCard = {
  id: number;
  series: number;
};

type Order = {
  id: number;
  user: User | null;
  card: DiscountCard | null;
  items: Item[];
};

const userOrders = (order: Order) => {
  console.log(`Заказ #${order.id}`);
  console.log('------------');
  if (order.user) {
    console.log('Клиент:');
    for (const orderKey in order.user) {
      // @ts-ignore
      console.log(`${orderKey}: ${order.user[orderKey]}`);
    }
    console.log('------------');
  } else {
    console.log('Клиент: Не указан');
    console.log('------------');
  }
  if (order.card) {
    console.log('Скидочная карта:');
    for (const orderKey in order.card) {
      // @ts-ignore
      console.log(`${orderKey}: ${order.card[orderKey]}`);
    }
    console.log('------------');
  } else {
    console.log('Скидочная карта: Не применена');
    console.log('------------');
  }
  if (order.items) {
    console.log('Список покупок:');
    for (let i = 0; i < order.items.length; i++) {
      console.log(`- ${order.items[i].name} ${order.items[i].price} ${order.items[i].count || '1'}шт`);
    }
    console.log('------------');
  }
  const arr = order.items.reduce((sum, num) => sum + num.price * (num.count || 1), 0);
  const sumCount = order.items.reduce((sum, num) => sum + (num.count || 1), 0);
  console.log(`Итого ${sumCount} позиций на ${arr}руб`);

  return '';
};

const order: Order = {
  id: 3,
  user: {
    id: 5,
    name: 'Алексей',
    email: 'example@domain.com',
  },
  card: { id: 8, series: 6374634 },
  items: [
    { id: 6, name: 'Хлеб', price: 75, count: 3 },
    { id: 9, name: 'Вафли', price: 95.9, count: 1 },
    { id: 12, name: 'Набор конфет', price: 350 },
  ],
};

console.log(userOrders(order));
