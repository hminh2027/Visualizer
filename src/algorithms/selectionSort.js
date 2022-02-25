import { swapPosition } from "../animations/animations"
import { swap } from "../helpers/util"

export const selectionSort = (array, animations, positions) => {
    // Use auxiliary array for sorting, and (main) array for indexing
    const auxiliaryArray = array.slice()  
    for (let i = 0; i < auxiliaryArray.length - 1; i++) {
        let minIndex = i
        let swapped = false
        for (let j = i + 1; j <auxiliaryArray.length; j++) {
            if(auxiliaryArray[j] < auxiliaryArray[minIndex]) {
                minIndex = j
                swapped = true
            }
        }
        
        // Swap animation
        if(swapped) swapPosition(animations, positions, [auxiliaryArray[i], auxiliaryArray[minIndex]], [array.indexOf(auxiliaryArray[i]), array.indexOf(auxiliaryArray[minIndex])])
        // Swap in auxiliary array
        swap(auxiliaryArray, i, minIndex)
    }
}