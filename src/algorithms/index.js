import { bubbleSort } from './bubbleSort'
import { mergeSort } from './mergeSort'

export const getMergeSortAnimations = (array) => {
    const animations = []   
    const positions = getInitialPosition()

    if (array.length <= 1) return array
    mergeSort(array, 0, array.length - 1, animations, positions)
    return animations
}

export const getBubbleSortAnimation = (array) => {
    const animations = []   
    const positions = getInitialPosition()

    if (array.length <= 1) return array
    bubbleSort(array, animations, positions)
    return animations
}

export const getInitialPosition = () => {
    let positions = [
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]},
        {value: 0, arr:[]}
    ]
    
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    
    for (let i = 0; i < arrayBars.length; i++) {
        const rect = arrayBars[i].getBoundingClientRect()
        positions[i].arr.push({x: rect.left, y: 0})
        positions[i].value = +arrayBars[i].textContent
    }

    return positions
}