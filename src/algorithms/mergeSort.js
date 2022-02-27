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
        changeColor(animations, positions, `Comparing ${array[i]} and ${array[j]}, add the smaller to queue`, [array[i], array[j]], 1)

        if (array[i] <= array[j]) {
            // Change color animation
            changeColor(animations, positions, `Since ${array[i]} < ${array[j]}, select the ${array[i]}`, [array[i], array[i]], 2)
            // Drop down
            addToQueue(animations, positions, `Add the selected element (${array[i]}) to queue`, array[i], k)
            tempArray[k++] = array[i++]
        } 
        else {
            // Change color animation
            changeColor(animations, positions, `Since ${array[i]} > ${array[j]}, select the ${array[j]}`, [array[j], array[j]], 2)
            // Dropdown
            addToQueue(animations, positions, `Add the selected element (${array[j]}) to queue`, array[j], k)
            tempArray[k++] = array[j++]
        }
    }
    // Remain values
    while (i <= middle) {
        // Change color animation
        changeColor(animations, positions, `Since right partion is empty, select the remain ${array[i]}`, [array[i], array[i]], 2)
        // Overwrite value
        addToQueue(animations, positions, `Add the selected element (${array[i]}) to queue`, array[i], k)
        tempArray[k++] = array[i++]
    }
    // Remain values
    while (j <= end) {
         // Change color animation
         changeColor(animations, positions, `Since left partion is empty, select the remain ${array[j]}`, [array[j], array[j]], 2)
        // Overwrite value
        addToQueue(animations, positions, `Add the selected element (${array[j]}) to queue`, array[j], k)
        tempArray[k++] = array[j++]
    }
    // Overwrite array with tempArray
    for (let i = 0; i <= end; i++){
        if (tempArray[i]) {
            array[i] = tempArray[i]
            addToArray(animations, positions, `Copying (${tempArray[i]}) from queue back to the original array`, tempArray[i])
        }
    }

}
  