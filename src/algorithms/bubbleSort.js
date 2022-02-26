import { changeColor, swapPosition } from "../animations/animations"
import { swap } from "../helpers/util"

export const bubbleSort = (array, animations, positions) => {
    // Use auxiliary array for sorting, and (main) array for indexing
    const auxiliaryArray = array.slice()
    for (let i = 0; i < auxiliaryArray.length; i++) {
        for (let j = i + 1; j <auxiliaryArray.length; j++) {
            // Change color animation
            changeColor(animations, positions, [auxiliaryArray[i], auxiliaryArray[j]], 1)
            if(auxiliaryArray[i] > auxiliaryArray[j]) {
                // Swap animation
                swapPosition(animations, positions, [auxiliaryArray[i], auxiliaryArray[j]], [array.indexOf(auxiliaryArray[i]), array.indexOf(auxiliaryArray[j])])      
                // Swap in auxiliary array
                swap(auxiliaryArray, i, j)
            }
        }
    }
}