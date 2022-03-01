import { changeColor, revertColor, swapPosition } from "../animations/animations"
import { swap } from "../helpers/util"

export const heapSort = (array, animations, positions) => {
    const n = array.length
    const auxiliaryArray = array.slice()

    // Build max heap
    revertColor(animations, positions, `Start building max heap tree`)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(array, auxiliaryArray, n, i, animations, positions)

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        swapPosition(animations, positions, `Swapping cuurent root node (${auxiliaryArray[0]}) with last node (${auxiliaryArray[i]})`, [auxiliaryArray[0], auxiliaryArray[i]], [array.indexOf(auxiliaryArray[0]), array.indexOf(auxiliaryArray[i])])

        // Move current root to end
        swap(auxiliaryArray, 0, i)
        heapify(array, auxiliaryArray, i, 0, animations, positions)
        revertColor(animations, positions, `Max heap tree built!`)
    }
}

const heapify = (array, auxiliaryArray, n, i, animations, positions) => {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    // Mark the largest column
    changeColor(animations, positions, `Set ${auxiliaryArray[largest]} as the largest value`, [auxiliaryArray[largest], auxiliaryArray[largest]], 2)

    // Mark the compared columns
    auxiliaryArray[left] && changeColor(animations, positions, `Compare if largest (${auxiliaryArray[largest]}) < left-child (${auxiliaryArray[left]})`, [auxiliaryArray[largest], auxiliaryArray[left]], 1)
    if (left < n && auxiliaryArray[left] > auxiliaryArray[largest]) {
        // Mark the largest column
        changeColor(animations, positions, `Since ${auxiliaryArray[largest]} < ${auxiliaryArray[left]} is true. Set new largest value to ${auxiliaryArray[left]}`, [auxiliaryArray[left], auxiliaryArray[left]], 2)
        largest = left
    }     
    // Mark the compared columns
    auxiliaryArray[right] && changeColor(animations, positions, `Compare if largest (${auxiliaryArray[largest]}) < right-child (${auxiliaryArray[right]})`, [auxiliaryArray[largest], auxiliaryArray[right]], 1)
    if (right < n && auxiliaryArray[right] > auxiliaryArray[largest]) {
        // Mark the largest column
        changeColor(animations, positions, `Since ${auxiliaryArray[largest]} < ${auxiliaryArray[right]} is true. Set new largest value to ${auxiliaryArray[right]}`, [auxiliaryArray[right], auxiliaryArray[right]], 2)
        largest = right
    }   
    // Mark the compared columns
    changeColor(animations, positions, `Compare if ${auxiliaryArray[largest]} (new-largest) == ${auxiliaryArray[i]} (old-largest)`, [auxiliaryArray[largest], auxiliaryArray[i]], 1)
    if (largest !== i) {
        swapPosition(animations, positions, `Since ${auxiliaryArray[largest]} == ${auxiliaryArray[i]} is false. Swap theirs positions`, [auxiliaryArray[i], auxiliaryArray[largest]], [array.indexOf(auxiliaryArray[i]), array.indexOf(auxiliaryArray[largest])])
        swap(auxiliaryArray, i, largest)
        // Build max heap
        revertColor(animations, positions, `Keep building max heap tree`)
        heapify(array, auxiliaryArray, n, largest, animations, positions)
    }
}
