export const animationsHandler = (animations, index, dispatch, speed) => {
    dispatch({ type: 'SET_IS_SORTING', payload: true })
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]
    const classes = ['default', 'compare', 'select']
    const timers = []
    let idx = index || 1
    let delay = 0

    for (let i = idx; i <= animations.length; i++) {
        if(i === animations.length) {
            timers.push(
                window.setTimeout(() => {
                    console.log('reset')
                    dispatch({ type: 'SET_IS_SORTING', payload: false })
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: -1 })
                }, delay * speed))
            break
        }
        timers.push(
        setTimeout(() => {
            for (let j = 0; j < animations[i].positions.length; j++) {
                arrayBars[j].style.transform = `translate(
                    ${animations[i].positions[j].arr[i].x - animations[i].positions[j].arr[0].x}px,
                    ${animations[i].positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
                )`
                arrayBars[j].classList.remove(...classes)
                switch(animations[i].positions[j].colors[i]) {
                    case 0:
                        arrayBars[j].classList.add('default')
                        break
                    case 1:
                        arrayBars[j].classList.add('compare')
                        break
                    case 2:
                        arrayBars[j].classList.add('select')
                        break
                    default:
                        break
                }
            }
            dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
            delay++

        }, delay * speed))
        delay++
    }
    return timers
}

export const animationHandler = (animationIndex, animations, dispatch) => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]
    const i = animationIndex
    const classes = ['default', 'compare', 'select']
    
    for (let j = 0; j < animations[i].positions.length; j++) {
        arrayBars[j].style.transform = `translate(
            ${animations[i].positions[j].arr[i].x - animations[i].positions[j].arr[0].x}px,
            ${animations[i].positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
        )`
        arrayBars[j].classList.remove(...classes)
        switch(animations[i].positions[j].colors[i]) {
            case 0:
                arrayBars[j].classList.add('default')
                break
            case 1:
                arrayBars[j].classList.add('compare')
                break
            case 2:
                arrayBars[j].classList.add('select')
                break
            default:
                break
        }
    }
    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
}