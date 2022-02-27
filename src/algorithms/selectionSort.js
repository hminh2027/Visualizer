import { changeColor, revertColor, swapPosition } from "../animations/animations"
import { swap } from "../helpers/util"

export const selectionSort = (array, animations, positions) => {
    // Use auxiliary array for sorting, and (main) array for indexing
    const auxiliaryArray = array.slice()  
    for (let i = 0; i < auxiliaryArray.length - 1; i++) {
        let minIndex = i
        let swapped = false
        for (let j = i + 1; j <auxiliaryArray.length; j++) {
            // Change color animation
            changeColor(animations, positions, `Comparing if ${auxiliaryArray[j]} < ${auxiliaryArray[minIndex]} (current minimum)`,[auxiliaryArray[minIndex], auxiliaryArray[j]], 1)
            if(auxiliaryArray[j] < auxiliaryArray[minIndex]) {
                minIndex = j
                swapped = true
                // Change color animation
                changeColor(animations, positions, `New minimum value now is ${auxiliaryArray[minIndex]}`,[auxiliaryArray[minIndex], auxiliaryArray[j]], 2)
            }
        }
        
        if(swapped) {
            // Revert color
            changeColor(animations, positions, `Swapping the minimum (${auxiliaryArray[minIndex]}) with the first unsorted element (${auxiliaryArray[i]})`, [auxiliaryArray[minIndex], auxiliaryArray[i]], 1)
            // Swap animation
            swapPosition(animations, positions, `Swapping the minimum (${auxiliaryArray[minIndex]}) with the first unsorted element (${auxiliaryArray[i]})`, [auxiliaryArray[i], auxiliaryArray[minIndex]], [array.indexOf(auxiliaryArray[i]), array.indexOf(auxiliaryArray[minIndex])])
            
        }
        else revertColor(animations, positions, `As the minimum is the first element in unsorted array, no need to swap`)
        // Swap in auxiliary array
        swap(auxiliaryArray, i, minIndex)
    }
}