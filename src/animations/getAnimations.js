import { bubbleSort } from '../algorithms/bubbleSort'
import { mergeSort } from '../algorithms/mergeSort'
import { getInitialPositions } from '../helpers/getInitialPositions'

export const getMergeSortAnimations = (array) => {
    const animations = []   
    const positions = getInitialPositions()

    if (array.length <= 1) return array
    mergeSort(array, 0, array.length - 1, animations, positions)
    return animations
}

export const getBubbleSortAnimations = (array) => {
    const animations = []   
    const positions = getInitialPositions()

    if (array.length <= 1) return array
    bubbleSort(array, animations, positions)
    return animations
}

