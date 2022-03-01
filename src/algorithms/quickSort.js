import { changeColor, revertColor, swapPosition } from "../animations/animations"
import { swap } from "../helpers/util"

const partition = (array, auxiliaryArray, start, end, animations, positions) => {
    let pivot = auxiliaryArray[end]
    changeColor(animations, positions, `Working on partion [${auxiliaryArray[start]}, ... , ${auxiliaryArray[end]}] (index ${start} to ${end})`, [auxiliaryArray[start], auxiliaryArray[end]], 1)
    changeColor(animations, positions, `Select ${pivot} as pivot`, [pivot, pivot], 2)

    let i = (start - 1)
 
    for (let j = start; j <= end - 1; j++) {
        changeColor(animations, positions, `Checking if ${auxiliaryArray[j]} < ${pivot} (pivot)`, [auxiliaryArray[j], pivot], 1)

        if (auxiliaryArray[j] < pivot) {
            i++
            swapPosition(animations, positions, `${auxiliaryArray[j]} < ${pivot} (pivot) is true. Swapping ${array[i]} (storeIndex = ${i}) with ${array[j]} (currentIndex = ${j}). Then storeIndex++`, [auxiliaryArray[i], auxiliaryArray[j]], [array.indexOf(auxiliaryArray[i]), array.indexOf(auxiliaryArray[j])])
            swap(auxiliaryArray, i, j)
        }
    }
    revertColor(animations, positions, `Iteration complete`)
    swapPosition(animations, positions, `Swapping ${auxiliaryArray[end]} (pivot) with ${auxiliaryArray[i + 1]} (element at storeIndex + 1 = ${i+1})`, [auxiliaryArray[i + 1], auxiliaryArray[end]], [array.indexOf(auxiliaryArray[i + 1]), array.indexOf(auxiliaryArray[end])])

    swap(auxiliaryArray, i + 1, end)
    return (i + 1)   
}
 
export const quickSort = (array, auxiliaryArray, start, end, animations, positions) => {
    if (start < end) {
         let middle = partition(array, auxiliaryArray, start, end, animations, positions)
        quickSort(array, auxiliaryArray, start, middle - 1, animations, positions)
        quickSort(array, auxiliaryArray, middle + 1, end, animations, positions)
    }
}