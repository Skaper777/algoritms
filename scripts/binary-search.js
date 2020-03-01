/**
 * Алгоритм бинарного поиска
 */

const array = [];
let lengthArray = 100; // Длина массива

for (let i = 0; i < lengthArray; i++) {
  array.push(i + 1); // Заполнение массива
}

const binarySearch = (num) => {
  console.log(array, array.length);
  
  let low = 0; // Начало поиска
  let high = array.length - 1; // Конец поиска
  let step = 1; // Шаг поиска

  while (low <= high) {
    const middle = Math.floor((low + high) / 2); // Середина списка
    const guess = array[middle]; // Попытка нахождения числа

    console.log('step: ' + step++);
    console.log(guess);

    if (guess < num) {
      low = middle + 1; // Если выбранное число меньше загаданного, то смещаем начало на середину + 1
    } else if (guess > num) {
      high = middle - 1; // Если выбранное число больше загаданного, то смещаем конец на середину - 1
    } else {
      console.log('Индекс числа: ' + middle + ' | steps: ' + (step - 1));
      return middle; // Находим число
    }
  }

  console.log('Нет значения');
  return null;
};

console.log('Бинарный поиск')
binarySearch(100);
console.log('-----------------------------');
