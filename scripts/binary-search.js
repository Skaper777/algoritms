const array = [];
let lengthArray = 100000;

for (let i = 0; i < lengthArray; i++) {
  array.push(i + 1);
}

const binarySearch = (num) => {
  console.log(array, array.length);
  
  let low = 0;
  let high = array.length - 1;
  let step = 1;

  while (low <= high) {
    const middle = Math.floor((low + high) / 2);
    const guess = array[middle];

    console.log('step: ' + step++);
    console.log(guess);

    if (guess < num) {
      low = middle + 1;
    } else if (guess > num) {
      high = middle - 1;
    } else {
      console.log('Индекс числа: ' + middle + ' | steps: ' + (step - 1));
      return middle;
    }
  }

  console.log('Нет значения');
  return null;
};

binarySearch(100);
