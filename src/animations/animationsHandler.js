

export const animationsHandler = (animations, index, dispatch, speed) => {
    dispatch({ type: 'SET_IS_SORTING', payload: true })

    const timers = []
    let idx = index || 1
    let delay = 0

    for (let i = idx; i <= animations.length; i++) {
        if(i === animations.length) {
            timers.push(
                window.setTimeout(() => {
                    console.log('reset')
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: -1 })
                }, delay * speed))
            break
        }
        switch(animations[i].action) {
            case 'COLOR':
                const idx = animations[i].index
                const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')

                timers.push(
                setTimeout(() => {
                    arrayBars[idx].style.backgroundColor = animations[i].color
                    // arrayBars[two].style.backgroundColor = animations[i].color
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
                    delay++
                }, delay * speed))
                break
            
            case 'TRANFORM':
                timers.push(
                setTimeout(() => {
                    transformHandler(i, animations[i].positions)
                    
                    dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
                    delay++
                }, delay * speed))
                break
                
            default:
                break
        }
        delay++
    }
    return timers
}

export const animationHandler = (animationIndex, animations, dispatch) => {
    const i = animationIndex
    switch(animations[i].action) {
        case 'COLOR':
            const idx = animations[i].index
            const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')

                arrayBars[idx].style.backgroundColor = animations[i].color
                // arrayBars[two].style.backgroundColor = animations[i].color
                dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
            break
        
        case 'TRANFORM':
                transformHandler(i, animations[i].positions) 
                dispatch({ type: 'SET_LAST_ANIMATION_INDEX', payload: i })
            break
            
        default:
            break
    }
}

export const transformHandler = (i, positions) => {
    const arrayBars = document.getElementsByClassName('Visualizer_bar__zgk33')
    const barsWrapper = document.getElementsByClassName('Visualizer_bars_wrapper__jJVHx')[0]

    for (let j = 0; j < positions.length; j++) {
        arrayBars[j].style.transform = `translate(
            ${positions[j].arr[i].x - positions[j].arr[0].x}px,
            ${positions[j].arr[i].y > 0 ? -10 : (barsWrapper.offsetHeight / -2)}px
        )`
    }
}