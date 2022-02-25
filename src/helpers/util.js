export const generateRandom = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

export const generateUniqueArray = (length) => {
    let tempArray = []
    for (let i = 0; i < length; i++) {
        let number = generateRandom(5, 49)
        while (tempArray.indexOf(number) !== -1) number = generateRandom(5, 49)
        tempArray.push(number)
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
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]

    for (let i = 0; i < arrayBars.length; i++) 
        arrayBars[i].style.transform = `translate(0, -${barsWrapper.offsetHeight / 2}px)`
}

export const resetStore = (dispatch) => {
    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: 0 })
    dispatch({ type: 'SET_ANIMATIONS', payload: [] })
}

export const clearTimeouts = (timers, dispatch) => {
    dispatch({ type: 'SET_IS_SORTING', payload: false })

    for (let i = 0; i < timers.length; i++)
    clearTimeout(timers[i])
}