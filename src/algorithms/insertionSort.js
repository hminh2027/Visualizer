import { addToArray, addToQueue, swapPosition } from "../animations/animations"

export const insertionSort = (array, animations, positions) => {
    // Use auxiliary array for sorting, and (main) array for indexing
    const auxiliaryArray = array.slice()
    let i, j, key
    for (i = 1; i < auxiliaryArray.length; i++) {
        key = auxiliaryArray[i]
        j = i - 1
        addToQueue(animations, positions, array[i - 1], i - 1)

        while (j >= 0 && auxiliaryArray[j] > key) {
            auxiliaryArray[j + 1] = auxiliaryArray[j]
            j-=1
            swapPosition(animations, positions, [auxiliaryArray[j + 1], auxiliaryArray[j]], [array.indexOf(auxiliaryArray[j + 1]), array.indexOf(auxiliaryArray[j])])
        }
        auxiliaryArray[j + 1] = key

        addToArray(animations, positions, array[i - 1])
    }
}