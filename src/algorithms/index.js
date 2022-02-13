import { mergeSort } from './mergeSort'

export const getMergeSortAnimations = (array, positions) => {
    const animations = []
    if (array.length <= 1) return array
    mergeSort(array, 0, array.length - 1, animations, positions)
    return {positions, animations}
}