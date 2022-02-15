export const generateRandom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

export const newArray = (length) => {
    let tempArray = []
    for (let i = 0; i < length; i++) 
        tempArray.push(generateRandom(10, 300))
    
    return tempArray
}

export const swap = (arr, a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}