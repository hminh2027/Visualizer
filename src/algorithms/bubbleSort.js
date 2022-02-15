import { swapPosition } from "../animations/animations"
import { swap } from "../helpers/util"

export const bubbleSort = (array, animations, positions) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j <array.length; j++) {
            if(array[i] > array[j]) {
                swapPosition(animations, positions, [array[i], array[j]], [i, j])
                swap(array, i, j)
            }
        }
    }
    console.log(array)
}