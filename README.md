# Algo-sort

Implementation of **Insertion Sort** in JavaScript (`sort.js`).

## The idea

Insertion sort works the way you sort playing cards in your hand. You keep a
**sorted** group on the left and pick up cards one at a time from the
**unsorted** group on the right. Each new card is slid leftward until it sits
in the right spot among the cards you've already sorted.

The array is split into two virtual parts:

- `arr[0 .. i-1]` → the **sorted** part (grows by one each pass)
- `arr[i .. end]` → the **unsorted** part (shrinks by one each pass)

## Step-by-step logic

```js
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
```

1. **Start at `i = 1`.** The element at index `0` is, by itself, an already
   sorted sequence of length 1, so there's nothing to do for it.

2. **Pick the key.** `key = arr[i]` is the current card we want to place. We
   save it in a variable because the next step overwrites positions in the
   array, and we'd otherwise lose this value.

3. **Scan the sorted part right-to-left.** `j` starts at `i - 1` (the last
   sorted element). The `while` loop runs as long as:
   - `j >= 0` → we haven't fallen off the front of the array, **and**
   - `arr[j] > key` → the sorted element is bigger than our key, so it must
     move out of the way.

4. **Shift, don't swap.** `arr[j + 1] = arr[j]` copies each bigger element one
   slot to the right, opening up a gap. Then `j--` moves the comparison one
   step further left. This is more efficient than swapping because the `key`
   value is parked safely in its own variable.

5. **Drop the key into the gap.** When the loop stops (either we hit the front
   or found an element `<= key`), the correct spot is `j + 1`, so
   `arr[j + 1] = key` inserts it.

6. **Repeat** until every element has been pulled into the sorted part.

## Worked example

Sorting `[5, 2, 4, 6, 1, 3]`:

| Pass (`i`) | key | Array after insertion      |
| ---------- | --- | -------------------------- |
| 1          | 2   | `[2, 5, 4, 6, 1, 3]`       |
| 2          | 4   | `[2, 4, 5, 6, 1, 3]`       |
| 3          | 6   | `[2, 4, 5, 6, 1, 3]`       |
| 4          | 1   | `[1, 2, 4, 5, 6, 3]`       |
| 5          | 3   | `[1, 2, 3, 4, 5, 6]`       |

Final result: `[1, 2, 3, 4, 5, 6]`.

## Complexity

- **Time:** `O(n²)` worst/average case (reverse-sorted input), `O(n)` best case
  (already sorted — the `while` loop never runs).
- **Space:** `O(1)` — sorts in place, no extra array needed.
- **Stable:** equal elements keep their original relative order (the condition
  uses `>` not `>=`).

## Run it

```bash
node sort.js
# → [ 1, 2, 3, 4, 5, 6 ]
```
