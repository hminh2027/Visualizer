export const bubbleSort = (array, animations, positions) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j <array.length; j++) {
            if(array[i] > array[j]){
                const temp = array[i]
                array[i] = array[j]
                array[j] = temp
                console.log('swap')
            }
        }
    }
    console.log(array)
}

const swap = (a, b) => {
    const temp = a
    a = b
    b = temp
}