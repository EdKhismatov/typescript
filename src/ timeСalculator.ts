// Калькулятор времени скачивания файла
/*
Создайте функцию downloadTimeCalculator, которая умеет рассчитывать время в секундах, необходимое для загрузки файла.
Функция на вход принимает информацию о файле и информацию о скорости скачивания.

--- Система измерений ---
Для расчётов скорости и/или объёма выделяет две системы - двоичную и десятеричную, мы будем использовать последнюю.
В десятеричной новая единица измерения означает 1000 предыдущих единиц:
  * KB = 1000 B
  * MB = 1000 KB
  * GB = 1000 MB
Эти единицы называются байты (B), килобайты (KB), мегабайты (MB), гигабайты (GB)

--- Точность измерений ---
Точность измерений - 1 секунда, считать миллисекунды не нужно.
Кол-во секунд округляется наверх, то есть:
* Если для скачивания нужно 0.00001 сек времени, то ответ должен быть 1 сек.
* Если для скачивания нужно 1 час 1 минута 30.7349 сек времени, то ответ должен быть 3691 секунд.

--- Рекомендация ---
Не пытайтесь вместить весь алгоритм в одну функцию - код получится похожим на кашу.
Создавайте столько дополнительных типов и вспомогательных функций, сколько посчитаете нужным.

Например, моё решение потребовало:
* 3 дополнительных типа
* 3 дополнительные функции

Да, вы не ошиблись, формулировка "создайте функцию X" разрешает создавать не только X,
но и любую другую функцию Y, Z, C, D, которая вам может пригодиться.

--- Тесты ---
Внизу расположены тест-кейсы для проверки работоспособности вашей функции.

В тест-кейсах лежит - файл, скорость, ожидаемый ответ.
Тест-кейсы по очереди в цикле проверяют, что вызов вашей функции с этим файлом
и этой скоростью даст ответ, который совпадает с ожидаемым.
 */

/*
 * Конкретные тестовые кейсы
 * Их редактировать запрещено!
 * Дебажить, конечно же, можно.
 */
type FileInfo = {
  name: string;
  size: number;
  units: string;
};

type SpeedInfo = {
  speedPerSecond: number;
  units: string;
};

type TestCase = [number, FileInfo, SpeedInfo];

const testCases: TestCase = [
  [10000, { name: 'День рождения.mp4', size: 1, units: 'gb' }, { speedPerSecond: 100, units: 'kb' }],
  [1024, { name: 'Отчёт.docx', size: 1023443, units: 'kb' }, { speedPerSecond: 1, units: 'mb' }],
  [1, { name: 'Голосовое сообщение.mp3', size: 1, units: 'b' }, { speedPerSecond: 1000, units: 'gb' }],
  [86402, { name: 'Корги.png', size: 100.45, units: 'mb' }, { speedPerSecond: 1162.6, units: 'b' }],
  [100450000000, { name: 'GTA V', size: 100.45, units: 'gb' }, { speedPerSecond: 1, units: 'b' }],
] as const;

/**
 * Цикл для проверки каждого тест-кейса по очереди
 */
const translationSize = (file) => {
  if (file.units === 'gb') {
    file.size = file.size * 1000 * 1000;
    file.units = 'kb';
  } else if (file.units === 'mb') {
    file.size = file.size * 1000;
    file.units = 'kb';
  } else if (file.units === 'b') {
    file.size = file.size / 1000;
    file.units = 'kb';
  }
  return file.size;
};

const translationSpeed = (speed) => {
  if (speed.units === 'gb') {
    speed.speedPerSecond = speed.speedPerSecond * 1000 * 1000;
    speed.units = 'kb';
  } else if (speed.units === 'mb') {
    speed.speedPerSecond = speed.speedPerSecond * 1000;
    speed.units = 'kb';
  } else if (speed.units === 'b') {
    speed.speedPerSecond = speed.speedPerSecond / 100;
    speed.units = 'kb';
  }
  return speed.speedPerSecond;
};

// console.log(translationSize({ name: 'День рождения.mp4', size: 1, units: 'gb' }));
// console.log(translationSpeed({ speedPerSecond: 1, units: 'mb' }));

const downloadTimeCalculator = (file, speed) => {
  const result = Math.ceil(translationSize(file) / translationSpeed(speed));
  return result;
};

for (const testCase of testCases) {
  const [expected, file, speed] = testCase;

  const result = downloadTimeCalculator(file, speed);

  if (result === expected) {
    console.log(`Расчеты верны для файла "${file.name}"! \tРезультат: ${result}  | Ожидаемый: ${expected}`);
  } else {
    console.log(`Расчеты НЕВЕРНЫ для файла "${file.name}"! \tРезультат: ${result}  | Ожидаемый: ${expected}`);
  }
}
