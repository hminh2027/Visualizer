import { addToArray, addToQueue, changeColor, swapPosition } from "../animations/animations"

export const insertionSort = (array, animations, positions) => {
    // Use auxiliary array for sorting, and (main) array for indexing
    const auxiliaryArray = array.slice()
    let i, j, key
    for (i = 1; i < auxiliaryArray.length; i++) {
        key = auxiliaryArray[i]
        j = i - 1
        // Change color
        changeColor(animations, positions, `Select the first unsorted element (${auxiliaryArray[i]})`, [auxiliaryArray[i], auxiliaryArray[i]], 2)
        // A
        addToQueue(animations, positions, `Set the selected element as Key (${auxiliaryArray[i]})`, auxiliaryArray[i], i)
        
        while (j >= 0 && auxiliaryArray[j] > key) {
            // Change color
            changeColor(animations, positions, `Comparing if Key (${key}) < sorted element (${auxiliaryArray[j]}), move current element if true`, [key, auxiliaryArray[j]], 1)
            // A
            swapPosition(animations, positions, `${key} < ${auxiliaryArray[j]} is true. Move current (${auxiliaryArray[j]}) to the right by 1`, [auxiliaryArray[j], key], [array.indexOf(auxiliaryArray[j]), array.indexOf(key)])
            auxiliaryArray[j + 1] = auxiliaryArray[j]
            j-=1
        }
        auxiliaryArray[j + 1] = key
        if (j < 0) addToArray(animations, positions, `This is the beginning of array (nothing to compare). Insert element here`, key)
        else addToArray(animations, positions, `${key} < ${auxiliaryArray[j]} is false. Insert element back at its position`, key)
    }
}