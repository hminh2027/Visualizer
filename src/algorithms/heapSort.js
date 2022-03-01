import { swapPosition } from "../animations/animations"
import { swap } from "../helpers/util"

export const heapSort = (array, animations, positions) => {
    const n = array.length
    const auxiliaryArray = array.slice()

    // Build max heap
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--)
        heapify(auxiliaryArray, n, i, animations, positions)

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        swapPosition(animations, positions, `Swapping ${auxiliaryArray[0]} with ${auxiliaryArray[i]}`, [auxiliaryArray[0], auxiliaryArray[i]], [array.indexOf(auxiliaryArray[0]), array.indexOf(auxiliaryArray[i])])

        // Move current root to end
        swap(auxiliaryArray, 0, i)
        heapify(auxiliaryArray, i, 0, animations, positions)
    }
}

const heapify = (array, n, i, animations, positions) => {
    const auxiliaryArray = array.slice()
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2

    if (left < n && auxiliaryArray[left] > auxiliaryArray[largest])
        largest = left

    if (right < n && auxiliaryArray[right] > auxiliaryArray[largest])
        largest = right

    if (largest !== i) {
        swapPosition(animations, positions, `Swapping ${auxiliaryArray[i]} with ${auxiliaryArray[largest]}`, [auxiliaryArray[i], auxiliaryArray[largest]], [array.indexOf(auxiliaryArray[i]), array.indexOf(auxiliaryArray[largest])])
        swap(auxiliaryArray, i, largest)
        heapify(auxiliaryArray, n, largest, animations, positions)
    }
}
