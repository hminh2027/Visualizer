import { bubbleSort } from '../algorithms/bubbleSort'
import { heapSort } from '../algorithms/heapSort'
import { insertionSort } from '../algorithms/insertionSort'
import { mergeSort } from '../algorithms/mergeSort'
import { quickSort } from '../algorithms/quickSort'
import { selectionSort } from '../algorithms/selectionSort'
import { getInitialPositions } from '../helpers/getInitialPositions'

const animationTemplate = {
    description: 'Initial positions',
    index: [],
    positions: []
}

export const getMergeSortAnimations = (array) => {
    const positions = getInitialPositions()
    const animations = [{...animationTemplate, positions}]   

    if (array.length <= 1) return array
    mergeSort(array.slice(), 0, array.length - 1, animations, positions)
    return animations
}

export const getBubbleSortAnimations = (array) => {
    const positions = getInitialPositions()
    const animations = [{...animationTemplate, positions}]   

    if (array.length <= 1) return array
    bubbleSort(array.slice(), animations, positions)
    return animations
}

export const getSelectionSortAnimations = (array) => {
    const positions = getInitialPositions()
    const animations = [{...animationTemplate, positions}]   

    if (array.length <= 1) return array
    selectionSort(array.slice(), animations, positions)
    return animations
}

export const getInsertionSortAnimations = (array) => {
    const positions = getInitialPositions()
    const animations = [{...animationTemplate, positions}]   

    if (array.length <= 1) return array
    insertionSort(array.slice(), animations, positions)
    return animations
}

export const getQuickSortAnimations = (array) => {
    const positions = getInitialPositions()
    const animations = [{...animationTemplate, positions}]   

    if (array.length <= 1) return array
    quickSort(array.slice(), array.slice(), 0, array.length - 1, animations, positions)
    return animations
}

export const getHeapSortAnimations = (array) => {
    const positions = getInitialPositions()
    const animations = [{...animationTemplate, positions}]   

    if (array.length <= 1) return array
    heapSort(array.slice(), animations, positions)
    return animations
}

// export const getCountingSortAnimations = (array) => {
//     return []
// }