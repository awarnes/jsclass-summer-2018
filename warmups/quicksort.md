## Quicksort

Quicksort is a divide and conquer algorithm. Quicksort first divides a large array into two smaller sub-arrays: the low elements and the high elements. Quicksort can then recursively sort the sub-arrays.

The steps are:

1. Pick an element, called a pivot, from the array.
2. Partitioning: reorder the array so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way). After this partitioning, the pivot is in its final position. This is called the partition operation.
3. Recursively apply the above steps to the sub-array of elements with smaller values and separately to the sub-array of elements with greater values.

The base case of the recursion is arrays of size zero or one, which are in order by definition, so they never need to be sorted.

The pivot selection and partitioning steps can be done in several different ways; the choice of specific implementation schemes greatly affects the algorithm's performance.

From [Wikipedia](https://en.wikipedia.org/wiki/Quicksort)

[Visualization of Quicksort](https://en.wikipedia.org/wiki/Quicksort#/media/File:Sorting_quicksort_anim.gif)

```
const quicksort = (arr) => {

}

const unsortedArray1 = [1, 6, 4, 7, 5, 9, 8, 0, 2, 3]

const unsortedArray2 = [1, 6, 4, 7, 5, 9, 8, 0, 2, 3, 1, 6, 4, 7, 5, 9, 8, 0, 2, 3]

const unsortedArray3 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

console.log(quicksort(unsortedArray1))
console.log(quicksort(unsortedArray2))
console.log(quicksort(unsortedArray3))
```