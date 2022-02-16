export const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const generateUniqueArray = (length) => {
    let tempArray = []
    for (let i = 0; i < length; i++) {
        const number = generateRandom(10, 300)
        if(tempArray.indexOf(number) === -1) tempArray.push(number)
    }
    
    return tempArray
}

export const swap = (arr, a, b) => {
    const temp = arr[a]
    arr[a] = arr[b]
    arr[b] = temp
}

export const resetColumns = () => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    for (let i = 0; i < arrayBars.length; i++) {
        arrayBars[i].style.transform = ''
    }
}