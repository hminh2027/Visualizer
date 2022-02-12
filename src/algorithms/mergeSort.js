export const mergeSort = (array, start, end, animations) => {
    if (start === end) return
    const middle = Math.floor((start + end) / 2)
    mergeSort(array, start, middle, animations)
    mergeSort(array, middle + 1, end, animations)
    doMerge(array, start, middle, end, animations)
}
  
  const doMerge = (array, start, middle, end, animations) => {
    let k = start
    let i = start
    let j = middle + 1
    let tempArray = []

    while (i <= middle && j <= end) {
        // Change color
        animations.push({
            description: `Comparing columns ${i} and ${j}`, 
            index: [i, j]
        })
        // Revert color
        animations.push({
            description: `Revert the color of columns ${i} and ${j}`, 
            index: [i, j]
        })
        // Overwrite value
        if (array[i] <= array[j]) {
            animations.push({
                description: `Overwrite in ${k} with value: ${array[i]}`, 
                index: [k, array[i]]
            })

            tempArray[k++] = array[i++]
        } 
        else {
            animations.push({
                description: `Overwrite in ${k} with value: ${array[j]}`, 
                index: [k, array[j]]
            })

            tempArray[k++] = array[j++]
        }
    }
    // Remain values
    while (i <= middle) {
        // Change color
        animations.push({
            description: `The remains value: ${i}`, 
            index: [i, i]
        })
        // Revert color
        animations.push({
            description: `The remains value (Revert color): ${i}`, 
            index: [i, i]
        })
        // Overwrite value
        animations.push({
            description: `Overwrite in ${k} with value: ${array[i]}`, 
            index: [k, array[i]]
        })

        tempArray[k++] = array[i++]
    }
    // Remain values
    while (j <= end) {
        // Change color
        animations.push({
            description: `The remains value: ${i}`, 
            index: [j, j]
        })
        // Revert color
        animations.push({
            description: `The remains value (Revert color): ${i}`, 
            index: [j, j]
        })
        // Overwrite value
        animations.push({
            description: `Overwrite in ${k} with value: ${array[j]}`, 
            index: [k, array[j]]
        })

        tempArray[k++] = array[j++]
    }
    // Overwrite array with tempArray
    for (let i = 0; i <= end; i++){
        if (tempArray[i]) array[i] = tempArray[i]
    }
}
  