/**
 * Алгоритм сортировки выбором
 */

const nums = [5, 3, 8, 22, 10, 1, 26, 11, 54, 110, 4, 2]; // Входной массив

function selectionSort(arr) {
  for (var i = 0; i < arr.length; i++) {
    let min = i; //  storing the index of minimum element

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[min] > arr[j]) {
        min = j; // updating the index of minimum element
      }
    }

    if (i !== min) { // swapping elements
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr
}

console.log('Сортировка выбором')
console.log('Входной массив: ', nums)
console.log('Отсортированный массив: ', selectionSort(nums));
console.log('-----------------------------');