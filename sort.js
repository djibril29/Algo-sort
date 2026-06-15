function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
      let key = arr[i];      // element to insert
      let j = i - 1;         // last index of sorted part
  
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j]; // shift element to the right
        j--;
      }
  
      arr[j + 1] = key;      // insert key in the right position
    }
  
    return arr;
  }
  
  console.log(insertionSort([5, 2, 4, 6, 1, 3]));
  