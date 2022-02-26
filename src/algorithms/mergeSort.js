import { changeColor, addToQueue, addToArray, revertColor } from "../animations//animations"

export const mergeSort = (array, start, end, animations, positions) => {
    if (start === end) return
    const middle = Math.floor((start + end) / 2)
    mergeSort(array, start, middle, animations, positions)
    mergeSort(array, middle + 1, end, animations, positions)
    doMerge(array, start, middle, end, animations, positions)
}
  
  const doMerge = (array, start, middle, end, animations, positions) => {
    let k = start
    let i = start
    let j = middle + 1
    let tempArray = []

    while (i <= middle && j <= end) {
        // Change color animation
        changeColor(animations, positions, [array[i], array[j]], 1)

        if (array[i] <= array[j]) {
            // Drop down
            addToQueue(animations, positions, array[i], k)
            tempArray[k++] = array[i++]
        } 
        else {
            addToQueue(animations, positions, array[j], k)
            tempArray[k++] = array[j++]
        }
    }
    // Remain values
    while (i <= middle) {
        // Overwrite value
        addToQueue(animations, positions, array[i], k)
        tempArray[k++] = array[i++]
    }
    // Remain values
    while (j <= end) {
        // Overwrite value
        addToQueue(animations, positions, array[j], k)
        tempArray[k++] = array[j++]
    }
    // Overwrite array with tempArray
    revertColor(animations, positions)
    for (let i = 0; i <= end; i++){
        if (tempArray[i]) {
            array[i] = tempArray[i]
            addToArray(animations, positions, tempArray[i])
        }
    }

}
  