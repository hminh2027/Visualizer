import { addAnimation, changePosition, goUp } from "../helpers/addAnimation"

export const mergeSort = (array, start, end, animations, positions) => {
    if (start === end) return
    const middle = Math.floor((start + end) / 2)
    mergeSort(array, start, middle, animations, positions)
    mergeSort(array, middle + 1, end, animations, positions)
    doMerge(array, start, middle, end, animations, positions)
}
  
  const doMerge = (array, start, middle, end, animations, positions) => {
    let k = start
    let i = start
    let j = middle + 1
    let tempArray = []

    while (i <= middle && j <= end) {
        // Change color
        addAnimation(animations, `Comparing columns ${i} and ${j}`, 'COMPARE', [i, j])

        // Revert color
        //addAnimation(animations, `Revert the color of columns ${i} and ${j}`, 'REVERT', [i, j])

        // Overwrite value

        if (array[i] <= array[j]) {
            // Drop down
            //addAnimation(animations, `Transform the column ${i} add to queue`, 'TRANSFORM', [i], `${k*5}px, 100px`)
            changePosition(array[i], k, positions)
            //addAnimation(animations, `Overwrite in ${k} with value: ${array[i]}`, 'OVERWRITE', [k, array[i]])
            tempArray[k++] = array[i++]
        } 
        else {
            //addAnimation(animations, `Transform the column ${j} add to queue`, 'TRANSFORM', [j], `${k*-15}px, 100px`)
            changePosition(array[j], k, positions)
            //addAnimation(animations, `Overwrite in ${k} with value: ${array[j]}`, 'OVERWRITE', [k, array[j]])
            tempArray[k++] = array[j++]
        }
    }
    // Remain values
    while (i <= middle) {
        // Change color
        //addAnimation(animations, `The remains value: ${i}`, 'COMPARE', [i, i])

        // Revert color
        //addAnimation(animations, `Revert the color of columns ${i}`, 'REVERT', [i, i])

        // Overwrite value
        //addAnimation(animations, `Overwrite in ${k} with value: ${array[i]}`, 'OVERWRITE', [k, array[i]])
        changePosition(array[i], k, positions)
        tempArray[k++] = array[i++]
    }
    // Remain values
    while (j <= end) {
        // Change color
        //addAnimation(animations, `The remains value: ${j}`, 'COMPARE', [j, j])

        // Revert color
        //addAnimation(animations, `Revert the color of columns ${j}`, 'REVERT', [j, j])

        // Overwrite value
        //addAnimation(animations, `Overwrite in ${k} with value: ${array[j]}`, 'OVERWRITE', [k, array[j]])
        changePosition(array[j], k, positions)
        tempArray[k++] = array[j++]
    }
    // Overwrite array with tempArray
    for (let i = 0; i <= end; i++){
        if (tempArray[i]) array[i] = tempArray[i]
        goUp(array[i], positions)
    }

}
  