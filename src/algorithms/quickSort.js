import { swap } from "../helpers/util";

const partition = (arr, start, end) => {
 
    // pivot
    let pivot = arr[end];
 
    // Index of smaller element and
    // indicates the right position
    // of pivot found so far
    let i = (start - 1);
 
    for (let j = start; j <= end - 1; j++) {
 
        // If current element is smaller
        // than the pivot
        if (arr[j] < pivot) {
 
            // Increment index of
            // smaller element
            i++;
            swap(arr, i, j);
        }
    }
    swap(arr, i + 1, end);
    return (i + 1);
}
 
/* The main function that implements QuickSort
          arr[] --> Array to be sorted,
          start --> Starting index,
          end --> Ending index
 */
export const quickSort = (arr, start, end) => {
    // const auxiliaryArray = array.slice()
    if (start < end) {
 
        // pi is partitioning index, arr[p]
        // is now at right place
        let middle = partition(arr, start, end);
 
        // Separately sort elements before
        // partition and after partition
        quickSort(arr, start, middle - 1);
        quickSort(arr, middle + 1, end);
    }
}